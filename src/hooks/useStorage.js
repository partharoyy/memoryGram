import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //create reference where image urls will be stored
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        //will put the file in the storage when user uploads
        storageRef.put(file).on("state_change", (snap) => {
            //create percentage variable 
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, err => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            //once we get the url do below
            collectionRef.add({ url, createdAt })
            setUrl(url)
        })


    }, [file])

    return { progress, error, url }
}

export default useStorage;
