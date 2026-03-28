import { IntlProvider } from "react-intl";
import { LOCALES } from "./constants";
import { Fragment } from "react/jsx-runtime";
import tranlations from "./translations";
import type { ReactNode } from "react";

const Provider = ({
  children,
  locale = LOCALES.ENGLISH,
}: {
  children: ReactNode;
  locale: string;
}): React.JSX.Element => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={tranlations[locale]}
  >
    {children}
  </IntlProvider>
);

export default Provider;
