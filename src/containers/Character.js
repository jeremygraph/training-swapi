/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Character from 'src/components/Character';

// Action Creators
import { characterInputChange, characterFormSubmit, darkMode, lightMode } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  name: state.name,
  height: state.height,
  mass: state.mass,
  hair_color: state.hair_color,
  skin_color: state.skin_color,
  eye_color: state.eye_color,
  gender: state.gender,
  inputCharacter: state.inputCharacter,
  darkTheme: state.darkTheme,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  characterInputChange: (modif) => {
    dispatch(characterInputChange(modif));
  },
  characterFormSubmit: () => {
    dispatch(characterFormSubmit());
  },
  darkMode: () => {
    dispatch(darkMode());
  },
  lightMode: () => {
    dispatch(lightMode());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const CharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Character);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default CharacterContainer;
