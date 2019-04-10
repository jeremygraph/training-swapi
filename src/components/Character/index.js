
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
 Form, Select, Label,Grid, Image, Button,
} from 'semantic-ui-react';
import './style.scss';

const Character = ({ 
  characterFormSubmit, characterInputChange, name, height, mass,
  hair_color, skin_color, eye_color, gender, darkMode, darkTheme, lightMode
}) => {

  const characters = [
    { text: 'Luke Skywalker', value: '1' },
    { text: 'C-3PO', value: '2' },
    { text: 'R2-D2', value: '3' },
    { text: 'Darth Vader', value: '4' },
    { text: 'Leia Organa', value: '5' },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    characterFormSubmit();
  };

  const handleDark = (event) => {
    event.preventDefault();
    darkMode();
  };

  const handleLight = (event) => {
    event.preventDefault();
    lightMode();
  };

  const handleChange = (e, { name, value }) => {
    const modif = {
      [name]: value,
    };
    console.log(modif);
    characterInputChange(modif);
  };
  return (
    <div
      id="character"
      className={classnames({
        darkMode: darkTheme,
      })}>
      <Grid divided="vertically">
        <Grid.Row columns={2}>
          <Grid.Column id="character-wrap">
            <div id="themeMode">
              { darkTheme
                ? <button onClick={handleLight}>light theme</button>
                : <button onClick={handleDark}>darkmode</button>
              }
            </div>
            <div>
              <Form onSubmit={handleSubmit}>
                <Label>character</Label>
                <Form.Field
                  control={Select}
                  options={characters}
                  name="inputCharacter"
                  placeholder="character"
                  onChange={handleChange}
                />
                <Button type="submit">submit</Button>
              </Form>
              <div id="character-description">
                { (name !== '' ) ? (
                  <ul>
                    <li>name: <span>{name}</span></li>
                    <li>height: <span>{height}</span></li>
                    <li>mass: <span>{mass}</span></li>
                    <li>hair color: <span>{hair_color}</span></li>
                    <li>skin: <span>{skin_color}</span></li>
                    <li>eye color: <span>{eye_color}</span></li>
                    <li>gender: <span>{gender}</span></li>
                  </ul>
                ) : ('please choose a character above')}
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            {(name === 'Luke Skywalker') ? <Image id="character-image" src="src/images/luke.jpg" /> : ''}
            {(name === 'C-3PO') ? <Image src="src/images/c3po.jpg" /> : ''}
            {(name === 'R2-D2') ? <Image src="src/images/r2d2.jpg" /> : ''}
            {(name === 'Darth Vader') ? <Image src="src/images/vador.jpg" /> : ''}
            {(name === 'Leia Organa') ? <Image src="src/images/leia.jpg" /> : ''}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  hair_color: PropTypes.string.isRequired,
  skin_color: PropTypes.string.isRequired,
  eye_color: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  characterFormSubmit: PropTypes.func.isRequired,
  characterInputChange: PropTypes.func.isRequired,
  darkMode: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  lightMode: PropTypes.func.isRequired,
};

export default Character;
