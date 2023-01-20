import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Dropdown
      onClick={() => setIsOpen(!isOpen)}
      isOpen={isOpen}
      direction="down"
    >
      <DropdownToggle caret>{t("change-language")}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={() => changeLanguage("ru")}>
          Русский
        </DropdownItem>
        <DropdownItem onClick={() => changeLanguage("en")}>
          English
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChangeLanguage;
