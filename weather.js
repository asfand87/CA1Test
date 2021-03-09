module.exports = {
  
  // Forecast function
  getForecast : function ( time, area, season ) {

    if ( area == "Dublin" ) {
      if ( time == "Morning" || season == 1 ) {
        return "Sunny";
      }
      else if ( time == "Evening" || season == 2 ) {
          return "Wet";
      }
    }
    else if ( area != "Dublin" ) {
      return "Storm";
    }
  },

  // correct clothes function
  getCorrectClothes: function ( temp ) {

    if ( temp > 70 ) {
      return "Shorts";
    } 
    else if ( temp > 50 ) {
      return "Jumper";
    } 
    else if ( temp > 30 ) {
      return "Coat";
    } 

  }


};