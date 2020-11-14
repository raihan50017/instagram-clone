import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { db, storage } from './firebase';
import firebase from 'firebase';
import './ImageUpload.css';

const ImageUpload = ({ username }) => {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);

    const handleChange = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (error) => {
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
                            caption: caption,
                            imgUrl: url,
                            username: username
                        });
                        setProgress(0);
                        setCaption('');
                        setImage(null);
                    })
            }
        )
    }

    console.log(image)

    return (
        <div className="imageupload">
            <progress className="imageupload__progress" value={progress} max="100"></progress>
            <input type="text" placeholder="Enter a caption..." onChange={event => setCaption(event.target.value)} />
            <input onChange={handleChange} type="file" />
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    );
};

export default ImageUpload;