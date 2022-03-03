import Image from "next/image";
import { DxcText, DxcStack, DxcList, DxcTable } from "@dxc-technology/halstack-react";
import AlertTypesImage from "./images/alert_types.png";
import DocFooter from "../../../common/DocFooter";
import Figure from "../../../common/Figure";
import HeadingLink from "../../../common/HeadingLink";

const ButtonUsage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Incorporate messages into the application when necessary to keep users informed of
            important changes.
          </DxcText>
          <DxcText>
            Messages should use positive rhetoric. Avoid using negatives. (e.g. Use “City is
            required.” instead of “You didn’t enter a city.”)
          </DxcText>
          <DxcText>Always use active instead of passive voice.</DxcText>
          <DxcText>
            Be concise. Avoid words that plead, belittle or intimidate (i.e. please,wrong, or else)
          </DxcText>
          <DxcText>
            Non-entry of a non-required entry field should never generate an edit message or warning
            message, nor deny user forward movement.
          </DxcText>
          <DxcText>
            If possible, dialog messages must always display in full without any scroll bar.
          </DxcText>
          <DxcText>
            Dialog messages will retract only when the user closes the dialog or completes through
            interaction.
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>Types</HeadingLink>
        <Figure caption="Context-based alert types">
          <Image src={AlertTypesImage} alt="Context-based alert types" />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Information</strong>
              </td>
              <td>
                Informational messages are used exclusively to assist the user with directional or
                explanatory text about a complex or seldom used process
              </td>
            </tr>
            <tr>
              <td>
                <strong>Warning</strong>
              </td>
              <td>
                Alert or warning messages should be displayed when there is a potential obstacle in
                completing a process as intended
              </td>
            </tr>
            <tr>
              <td>
                <strong>Error</strong>
              </td>
              <td>
                Error messages convey a critical system problem that requires user and/or technical
                intervention to correct
              </td>
            </tr>
            <tr>
              <td>
                <strong>Success</strong>
              </td>
              <td>
                Success messages should be used to assure user that a system calculation or data
                submission was completed correctly
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <HeadingLink level={3}>Variants</HeadingLink>
        <DxcTable>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Inline</strong>
              </td>
              <td>
                The notification appears in the up right corner of the screen staying visible for 10
                seconds
              </td>
            </tr>
            <tr>
              <td>
                <strong>Modal</strong>
              </td>
              <td>
                The notification appears centered in the screen using an overlay that obscures the
                content below
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/overview/introduction/IntroductionPage.tsx" />
    </DxcStack>
  );
};

export default ButtonUsage;
