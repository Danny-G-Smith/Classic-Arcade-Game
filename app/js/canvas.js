let  wonHTML = document.getElementById( 'wonHTML' ),
   lostHTML = document.getElementById( 'lostHTML' ),

   setupClasses = document.getElementById('select-character').classList,
   wonClasses = document.getElementById('won-game').classList,
   lostClasses = document.getElementById('lost-game').classList,

   setupButton = document.getElementById('button__select-character'),
   lostButton = document.getElementById('button__lost-game'),
   wonButton = document.getElementById('button__won-game');
/**
 * @description Open modal and give stats when user wins
 */
function closeSetupModal() {
   //debugger
   //event.stopPropagation();
   //event.preventDefault();

   setupCharacterSelect.hide();
}

//let setupModal;
setupButton.addEventListener('click', closeSetupModal, false)


/**
 * @description Open modal and give stats when user wins
 */
function closeWonModal() {
   wonClasses.remove('active');
   wonClasses.add('hide');
}

wonButton.addEventListener('click', closeWonModal, false)

/**
 * @description open modal and give stats when user loses
 */
function closeLostModal() {
   lostClasses.remove('active');
   lostClasses.add('hide');
   // document.getElementsByClassName('screen__header')[0].remove('active');
   // document.getElementsByClassName('screen__header')[0].add('hide');
}

lostButton.addEventListener('click', closeLostModal, false)

