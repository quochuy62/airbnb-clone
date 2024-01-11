import React from "react";
import CTA from "../Dashboard/CTA";
import HeadingAdmin from "../../../components/admin/HeadingAdmin/HeadingAdmin";
import LocationList from "../../../components/admin/LocationTable/LocationList";

const LocationAdminPage = () => {
  return (
    <>
      <main className="h-full overflow-y-auto">
        <div className="container px-6 mx-auto grid">
          <HeadingAdmin heading="Vị trí" />
          {/* <!-- CTA --> */}
          <CTA />
          {/* <!-- New Table --> */}
          <LocationList />
        </div>
      </main>
   
    </>
  );
};

export default LocationAdminPage;
