// components/GoogleMap.tsx
import React from "react";

const GoogleMapEmbed: React.FC = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0571097589427!2d105.78332437536596!3d21.030400780619342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c70362ec3%3A0x6d122a63fc625836!2zU-G7kSA5IFAuIER1eSBUw6JuLCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1721661157427!5m2!1sen!2s"
      width="350"
      height="200"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default GoogleMapEmbed;
