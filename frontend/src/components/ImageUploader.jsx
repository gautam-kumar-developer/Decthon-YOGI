import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';

const ImageUploader = ({ onImageSelect }) => {
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
            onImageSelect(file);
        }
    };

    const clearImage = () => {
        setPreview(null);
        onImageSelect(null);
    };

    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Upload Evidence (Optional)</label>

            {!preview ? (
                <label className="border-2 border-dashed border-white/20 hover:border-neon-cyan/50 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer transition-all bg-white/5">
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-400">Click to upload image</span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
            ) : (
                <div className="relative rounded-lg overflow-hidden border border-white/20 inline-block w-fit">
                    <img src={preview} alt="Preview" className="h-40 object-cover" />
                    <button
                        onClick={clearImage}
                        className="absolute top-1 right-1 bg-black/50 hover:bg-black/80 text-white rounded-full p-1 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ImageUploader;
