"use client";


const ResponsiveGallery = ({ images }) => {
  return (
    <div className="flex flex-wrap h-auto items-center justify-center gap-4 p-1 my-10 mx-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="shadow-md z-10"
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              width={300}
              height={1}
              className="object-cover h-60 w-72 rounded"
            />
          </div>
        ))}
      </div>
  );
};

export default ResponsiveGallery;
