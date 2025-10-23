
// const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
    cors(req, res, async () => {
        try {
            const bookCollection = admin.firestore().collection('books');
            const snapshot = await bookCollection.get();
            const count = snapshot.size;

            res.status(200).send({ count });
        } catch (error) {
            res.status(500).send( "Error counting books" );
        }
    });
});