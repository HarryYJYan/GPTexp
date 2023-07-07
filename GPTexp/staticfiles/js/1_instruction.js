var timeline = [];

var jsPsych = initJsPsych({
  show_progress_bar: true,
  on_finish: function() {
    jsPsych.data.displayData();
  }
});

var welcome = {
  type: jsPsychInstructions,
  pages: ['<p>Welcome to the experiment.</p>'],
  show_clickable_nav: true
};


var fullscreen_trial = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
};
var cogpsy_q23_options = ["Episodic", "Semantic", "Explicit", "Implicit"];

var cogpsy_q23 = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {prompt: "__________ memory refers to a form of memory retrieval in which\na person consciously acts to recall or recognize particular information.", options: cogpsy_q23_options, required: true, horizontal: true,},
      {prompt: "__________ memory refers to a form of memory retrieval in which\na person uses recalled or recognized information without consciously being aware of doing so.", options: cogpsy_q23_options, required: true, horizontal: true,},  
    ],
  };

timeline.push(welcome);
timeline.push(fullscreen_trial);
timeline.push(cogpsy_q23)
