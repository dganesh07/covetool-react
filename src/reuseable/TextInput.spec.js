import React from "react";
import TextInput from "./TextInput";
import { render, cleanup, findByPlaceholderText } from "react-testing-library";
import { exportAllDeclaration } from "@babel/types";

afterEach(cleanup);

it("should render a placeholder when passed a placeholder", () => {
  const { getByPlaceholderText, debug } = render(
    <TextInput
      placeholder="example"
      value=""
      onChange={() => {}}
      id="id"
      name="name"
      label="label"
    />
  );
  debug();
  getByPlaceholderText("example");
});

// it("should hide label when no label is passed", () => {
//     const { queryByTestId } = render(
//         <TextInput
//             placeholder="example"
//             value=""
//             onChange={() => { }}
//             id="id"
//             name="name"
//         />
//     );
//     exportAllDeclaration(queryByTestId("label")).
// });
