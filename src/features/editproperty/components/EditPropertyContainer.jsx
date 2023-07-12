import { useDispatch, useSelector } from "react-redux";
import HeaderAgent from "../../../components/HeaderAgent";
import EditPropertyForm from "./EditPropertyForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { userPropertiesByIdAsync } from "../../userProperties/slice/userProperties";
import { getdistrictlistAsync } from "../../agencyInformation/slice/adminviewagency-slice";
import { getImageByPropertyIdAsync } from "../../createproperty/slice/createproperty-slice";

export default function EditPropertyContainer() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(userPropertiesByIdAsync(id));
    dispatch(getImageByPropertyIdAsync(id));
    dispatch(getdistrictlistAsync());
  }, [id]);

  const userPropertiesIdlist = useSelector(
    (state) => state?.userProperties?.userPropertiesById
  );
  const listProvice = useSelector(
    (state) => state?.adminViewAgent?.districtlist
  );
  const oldProperty = { ...userPropertiesIdlist };
  const imageProperty = useSelector(
    (state) => state?.propertyPlan?.imageProperty
  );
  const imageProp = [...(imageProperty?.result ?? [])];

  // console.log("oldProperty-------->", oldProperty);
  return (
    <>
      <HeaderAgent topic="Edit Property" />
      <EditPropertyForm
        key={oldProperty.id}
        oldProperty={oldProperty}
        listProvice={listProvice}
        oldImage={imageProp}
      />
    </>
  );
}
