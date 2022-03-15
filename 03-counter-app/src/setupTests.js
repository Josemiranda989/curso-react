// import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";
// import { configure } from "@testing-library/react";

/* configure({ testIdAttribute: "data-name" });
window.__ENV__ = {}; */

import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

