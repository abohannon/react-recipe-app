/* global $ */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const App = () => {

  return (
    <div style={{
      maxWidth: '800px',
      margin: 'auto',
      marginTop: '3vh'
    }}>
      <AddRecipe/>
      <RecipeList/>
    </div>
  );
};

const RecipeList = () => {
  return (
    <ul className="collapsible" data-collapsible="expandable">
      <li>
        <div style={{
          backgroundImage: "url(http://farm3.static.flickr.com/2218/4287485981_f0423b9814_z.jpg)"
        }} className="collapsible-header cover">
          <h4 className="recipe-title">Chicken Tortilla Soup</h4>
        </div>
        <div className="collapsible-body">
          <h5>Directions</h5>
          <p>In a large saucepan heat the vegetable oil. Add the onions and cook for 2 minutes. Once the onions have softened add the garlic and jalepenos and cook for another minute. Pour the chicken broth, tomatoes and beans into the pot and bring to a boil. Once at a boil lower heat to simmer and add your chicken breasts. Cook the chicken for 20 to 25 minutes. Once chicken is cooked remove from pot. When cool enough to handle shred it and set it aside. Add lime juice and fresh cilantro to the pot. In a serving bowl add a mound of shredded chicken. Ladle soup over chicken and top with a lime wedge, grilled tortilla strips, avocado slices and cheese.</p>
          <h5>Ingredients</h5>
          <ul>
            <li>2 tablespoons vegetable oil</li>
            <li>1 small onion, diced</li>
            <li>2 tablespoons minced garlic</li>
            <li>2 jalapenos, finely diced</li>
            <li>6 cups low-sodium chicken broth</li>
            <li>One 14.5-ounce can fire-roasted diced tomatoes</li>
            <li>One 14.5-ounce can black beans, rinsed and drained</li>
            <li>3 chicken breasts, boneless and skinless</li>
            <li>2 limes, juiced, plus wedges for garnish</li>
            <li>Salt and freshly ground black pepper</li>
            <li>1 cup roughly chopped fresh cilantro leaves</li>
            <li>One 8-inch flour tortilla, grilled, cut into thin strips</li>
            <li>1 avocado, pitted, sliced</li>
            <li>1 cup shredded Monterrey cheese</li>
          </ul>
        </div>
      </li>
      <li>
        <div style={{
          backgroundImage: "url(https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F201004-xl-classic-ceviche.jpg%3Fitok%3Dpzp2f7gD&w=800&q=60)"
        }} className="collapsible-header cover">
          <h4 className="recipe-title">Classic Ceviche</h4>
        </div>
        <div className="collapsible-body">
          <h5>Instructions</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h5>Recipe</h5>

        </div>
      </li>
    </ul>
  );
};

const AddRecipe = () => {

  $(document).ready(function() {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  return (
    <div style={{
      textAlign: "center"
    }}>
      <a className="waves-effect waves-light btn modal-trigger" href="#modal">
        <i className="material-icons right">add</i>Add Recipe</a>
      <div id="modal" className="modal">
        <div className="modal-content">
          <h4>Add Recipe</h4>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="recipe-title" type="text"/>
                  <label htmlFor="recipe-title">Recipe Title</label>
                </div>
                <div className="input-field col s12">
                  <input id="recipe-image" type="text"/>
                  <label htmlFor="recipe-image">Image URL</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="instructions" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Instructions</label>
                </div>
                <div className="input-field col s12">
                  <textarea id="ingredients" className="materialize-textarea"></textarea>
                  <label htmlFor="textarea1">Ingredients (comma separated)</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Save Recipe</a>
        </div>
      </div>
    </div>
  );
};

const RecipeForm = () => {

};

ReactDOM.render(
  <App/>, document.querySelector('#root'));
registerServiceWorker();
