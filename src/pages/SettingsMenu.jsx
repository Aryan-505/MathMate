import { Dropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const SettingsMenu = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <Icon.Cog/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
        {/* Add as many actions as you need */}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SettingsMenu;
