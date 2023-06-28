import React from "react";
import HeaderAgent from "../../../components/HeaderAgent";
import AminityForm from "./AminityForm";
import PropertyForm from "./PropertyForm";
import PropertyEditForm from "../../editproperty/components/PropertyEditForm";

export default function PropertyContainer() {
  return (
    <>
      <HeaderAgent topic="Create Property" />
      <div className="flex flex-col gap-6 m-8 mt-0">
        <PropertyForm />
      </div>
    </>
  );
}
