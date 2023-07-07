
var preload = {
    type: jsPsychPreload,
    auto_preload: true
  };

jsPsych.run([
    welcome, 
    fullscreen_trial, 
    preload, 
    browsercheck_instruction, 
    browser_check_trial, 
    results_trial, 
    session_instruction, 
    cogpsy_q1, 
    cogpsy_q23,
    cogpsy_q45,
    cogpsy_q6,
    cogpsy_summary,
    post_trial_instruction,
    fullscreen_trial_exit
 ]);

