import type { ReactNode } from "react";
import { I18nProvider } from "../i18n";

const ProviderWrapper = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  return <I18nProvider locale="en-us">{children}</I18nProvider>;
};

export default ProviderWrapper;
