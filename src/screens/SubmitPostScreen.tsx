import Button from "@/components/input/Button";
import VFlex from "@/components/layout/VFlex";
import Text from "@/components/typography/Text";
import { db } from "@/lib/firebase";

import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function SubmitPostScreen() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const handleImageUpload = (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result as any); // base64-encoded image
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        const randomNumber = Math.floor(Math.random() * 1000000);

        db.collection("Messages").doc(randomNumber.toString()).set({
            author: name,
            body: message,
            date: formattedDate,
            base64_image: image
        });

        navigate("/");
    };

    return (
        <VFlex className="w-screen h-screen p-4 bg-[#bde0fe] overflow-y-auto justify-center items-center">
            <VFlex className="w-[30em] bg-white rounded-lg gap-4 p-6">
                <Text className="text-center text-xl font-bold mb-4">Submit Post</Text>

                <input
                    type="text"
                    placeholder="Name"
                    className="p-2 border border-gray-300 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <textarea
                    placeholder="Message"
                    className="p-2 border border-gray-300 rounded h-24"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <input
                    type="file"
                    accept="image/*"
                    className="p-2"
                    onChange={handleImageUpload}
                />

                <Button className="p-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>
                    Submit
                </Button>
            </VFlex>
        </VFlex>
    );
}
