import React, { useState } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";

interface Publication {
  title: string;
  journal: string;
  authors: string[];
  doi: string;
  featureImage: string;
  abstract: string;
}

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer  hover:scale-105 transition-all duration-200 ease-in-out"
        onClick={handleCardClick}
      >
        <div className="p-2 overflow-y-auto">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/3 md:mr-4 mb-2">
              <Image
                src={publication.featureImage}
                alt={publication.title}
                className="w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-md text-slate-800 font-bold mb-2">
                {publication.title}
              </h2>
              <p className="text-slate-800 mb-2 italic font-semibold">
                {publication.journal}
              </p>
              <p className="text-slate-800 mb-2">
                {publication.authors.map((author, index) => (
                  <span key={index}>
                    {index > 0 && ", "}
                    {author === "John Zinno" ? (
                      <span className="font-semibold">{author}</span>
                    ) : (
                      author
                    )}
                  </span>
                ))}
              </p>
              <p className="text-blue-500 mb-2">
                <a
                  href={`https://${publication.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {publication.doi}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center backdrop-blur-sm items-center"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden w-11/12 relative backdrop-filter">
            <div
              className="p-4"
              style={{ maxHeight: "75vh", overflowY: "auto" }}
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/3 md:mr-4 mb-2">
                  <Image
                    src={publication.featureImage}
                    alt={publication.title}
                    className="w-full h-full object-cover"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-end">
                    <button
                      className="text-gray-700 text-xl absolute top-2 right-4"
                      onClick={handleModalClose}
                    >
                      <FiX className=" hover:scale-110 transition-all duration-200 ease-in-out" />
                    </button>
                  </div>
                  <h2 className="text-md font-bold my-2">
                    {publication.title}
                  </h2>
                  <p className="text-gray-700 mb-2 italic font-semibold">
                    {publication.journal}
                  </p>
                  <p className="text-gray-700 mb-2">
                    {publication.authors.map((author, index) => (
                      <span key={index}>
                        {index > 0 && ", "}
                        {author === "John Zinno" ? (
                          <span className="font-semibold">{author}</span>
                        ) : (
                          author
                        )}
                      </span>
                    ))}
                  </p>
                  <p className="text-blue-500 mb-2">
                    <a
                      href={`https://${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {publication.doi}
                    </a>
                  </p>
                  <div className="text-gray-700 text-sm mt-4 mb-20">
                    {publication.abstract}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicationCard;
