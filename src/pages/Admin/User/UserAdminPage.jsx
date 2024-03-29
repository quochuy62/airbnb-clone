import React from "react";
import CTA from "../Dashboard/CTA";
import UserList from "../../../components/admin/UserTable/UserList";
import HeadingAdmin from "../../../components/admin/HeadingAdmin/HeadingAdmin";

const UserAdminPage = () => {
  return (
    <>
      <main className="h-full overflow-y-auto">
        <div className="container px-6 mx-auto grid">
          <HeadingAdmin heading="Người dùng" />
          {/* <!-- CTA --> */}
          <CTA />
          {/* <!-- New Table --> */}
          <UserList />
        </div>
      </main>
      
    </>
  );
};

export default UserAdminPage;
