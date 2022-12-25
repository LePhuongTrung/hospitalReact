import React from "react";
import CustomInput from "../../public/components/CustomInput";
function Index() {
  return (
    <div class="w-full space-y-9 mt-10 mr-4">
      <div class="flex space-x-10">
        <div class="w-1/2">
          <CustomInput
            label="Full Name"
            disabled="true"
            value="Le Phuong Trung"
          />
        </div>
        <div class="w-1/2">
          <CustomInput
            label="Phone Number"
            disabled="true"
            value="0397569845"
          />
        </div>
      </div>
      <div class="flex space-x-10">
        <div class="w-1/2">
          <CustomInput
            label="Address"
            disabled="true"
            value="180 Nguyen Tri Phuong, DN"
          />
        </div>
        <div class="w-1/2">
          <CustomInput
            label="Emergency Contact"
            disabled="true"
            value="0397569845"
          />
        </div>
      </div>
      <div class="flex space-x-10">
        <div class="w-1/2">
          <CustomInput
            label="Medicine Code"
            disabled="true"
            value="648484554"
          />
        </div>
        <div class="w-1/2">
          <CustomInput label="CCCD" disabled="true" value="1231231312" />
        </div>
      </div>
    </div>
  );
}

export default Index;
