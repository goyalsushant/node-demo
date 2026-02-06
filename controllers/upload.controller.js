import containerClient from '../config/blob.js'
import { StorageSharedKeyCredential, generateBlobSASQueryParameters, BlobSASPermissions } from "@azure/storage-blob"

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY;

// Helper to generate SAS URL
function generateSASURL(blobName) {
    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

    const sasToken = generateBlobSASQueryParameters(
        {
            containerName: "images",
            blobName,
            permissions: BlobSASPermissions.parse("r"),
            expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // 1 hour expiry
        },
        sharedKeyCredential
    ).toString();

    return `https://${accountName}.blob.core.windows.net/images/${blobName}?${sasToken}`;
}

export const uploadController = async (req, res) => {
    const blobName = req.file.originalname;
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);

    try {
        await blockBlobClient.uploadData(req.file.buffer, {
            blobHTTPHeaders: { blobContentType: req.file.mimetype },
        });

        const url = generateSASURL(blobName);
        res.status(201).json({ message: "File uploaded", url });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Upload failed" });
    }
}