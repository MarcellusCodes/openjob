import React from "react";

const Heading = ({
  title,
  icon,
  caption,
}: {
  title: string;
  icon: React.ReactNode;
  caption: string;
}) => {
  return (
    <div>
      <div className="flex flex-row items-center space-x-2">
        {icon}
        <h3 className="text-black text-3xl">{title}</h3>
      </div>
      <p className="text-gray-500 text-sm text-opacity-85 text-left">
        {caption}
      </p>
    </div>
  );
};

export default Heading;
