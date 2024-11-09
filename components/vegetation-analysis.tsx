import React, { useState } from 'react';

const VegetationAnalysis = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">画像解析</h2>
      <div className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        
        {originalImage && (
          <div>
            <h3 className="text-lg font-medium mb-2">アップロードされた画像</h3>
            <img
              src={originalImage}
              alt="Original"
              className="w-full h-auto rounded shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VegetationAnalysis;