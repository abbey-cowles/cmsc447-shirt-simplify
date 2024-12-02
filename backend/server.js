const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer');
const sharp = require('sharp');
const { getPalette } = require('colorthief'); // Library to extract colors from images
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({ dest: 'uploads/' }); // File upload destination

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shirt_simplify',
});

app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { numColors } = req.body;
        const filePath = req.file.path;

        // Extract colors using colorthief
        const palette = await getPalette(filePath, parseInt(numColors, 10) || 5);
        const mostCommonColor = palette.find(
            ([r, g, b]) => !(r === 255 && g === 255 && b === 255) // Exclude white
        );

        if (!mostCommonColor) {
            fs.unlinkSync(filePath); // Clean up uploaded file
            return res.status(400).json({ message: "No non-white colors found in the image." });
        }

        const [r, g, b] = mostCommonColor; // Most common color
        const modifiedColor = [
            Math.min(r + 20, 255),
            Math.min(g + 20, 255),
            Math.min(b + 20, 255),
        ]; // Slightly modify the color

        console.log("Detected most prominent color (RGB):", mostCommonColor);
        console.log("Modified color (RGB):", modifiedColor);

        const imageBuffer = fs.readFileSync(filePath);
        const { data, info } = await sharp(imageBuffer).raw().toBuffer({ resolveWithObject: true });

        const threshold = 70; // Increased threshold for better shadow handling
        for (let i = 0; i < data.length; i += 3) {
            const pixelColor = [data[i], data[i + 1], data[i + 2]];

            // Calculate Euclidean distance between the pixel color and the most common color
            const colorDistance = Math.sqrt(
                Math.pow(pixelColor[0] - r, 2) +
                Math.pow(pixelColor[1] - g, 2) +
                Math.pow(pixelColor[2] - b, 2)
            );

            // Check if the color distance is within the threshold
            if (colorDistance <= threshold) {
                data[i] = modifiedColor[0]; // Modify red channel
                data[i + 1] = modifiedColor[1]; // Modify green channel
                data[i + 2] = modifiedColor[2]; // Modify blue channel
            }
        }

        const modifiedImageBuffer = await sharp(data, {
            raw: {
                width: info.width,
                height: info.height,
                channels: info.channels,
            },
        })
            .png()
            .toBuffer();

        fs.unlinkSync(filePath); // Clean up the uploaded file

        res.set('Content-Type', 'image/png');
        res.send(modifiedImageBuffer);
    } catch (error) {
        console.error("Error processing image:", error);
        res.status(500).json({ message: "Failed to process image" });
    }
});

app.listen(8081, () => {
    console.log("Server running on port 8081");
});
