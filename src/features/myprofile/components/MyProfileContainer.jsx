import HeaderAgent from "../../../components/HeaderAgent";
import MyProfileForm from "./MYProfileform";

export default function MyProfileContainer() {
  const data = [
    {
      id: 1,
      profileimg: "",
      firstName: "suthee",
      lastName: "namsiri",
      phonenumber: "0812561518",
      email: "makemake@gmail.com",
      role: "",
      locked: "",
    },
  ];

  return (
    <>
      <HeaderAgent topic="My profile" />
      <div className="flex flex-col gap-6  mt-0">
        {data.map((el) => (
          <MyProfileForm key={el.id} oldProfile={el} />
        ))}
      </div>
    </>
  );
}
