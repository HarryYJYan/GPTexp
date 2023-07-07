var session_instruction = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<p>In this study, you will explore <strong> Implicit and Explicit Memory </strong> concepts and their measurement methods. </p>
      <p>1) Your first task is to <strong> interact with ChatGPT for 12 minutes </strong>, deepening your understanding and memorizing key details. </p>
      <p>2) Afterward, you will take a <strong> Knowledge Test </strong> on implicit and explicit memory, their measures, and related concepts.</p>
      <p>3) Finally, you will be ask write a <strong> Summary </strong> of what you learned from the interaction with ChatGPT. </p>
      <p> (Time limit < 5 minutes. Word limit > 250 words.) <br> </p>
      <p> Let's dive in!</p>`,
    choices: ['Continue']
  };

var cogpsy_q1 = {
    type: jsPsychSurveyText,
    questions: [
      {prompt: 'List the names of concepts you learned from your interaction with ChatGPT', placeholder: 'e.g., Episodic Memory', rows:10, columns: 100}
    ]
  };

var cogpsy_q23_options = ["Episodic", "Semantic", "Explicit", "Implicit"];

var cogpsy_q23 = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {prompt: `<p> __________ memory refers to a form of memory retrieval in which a person </p>
      <p> consciously acts to recall or recognize particular information.</p>`, 
      options: cogpsy_q23_options, 
      required: true, 
      horizontal: true,},
      {prompt: `<p> __________ memory refers to a form of memory retrieval in which a person </p>
      <p> uses recalled or recognized information without consciously being aware of doing so.</p>`, 
      options: cogpsy_q23_options, 
      required: true, 
      horizontal: true,},
    ],
  };

var cogpsy_q45_options = ["Recall", "Recognition", "Identification", "Production"];

var cogpsy_q45 = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {prompt: `<p>___________ refers to a process of memory often employed in memory tasks, </p> 
      <p>in which the person is asked to produce a fact, a word, or other item from memory.`, 
      options: cogpsy_q45_options, 
      required: true, 
      horizontal: true,},
      {prompt: `<p>___________ refers to a process of memory often employed in memory tasks, </p> 
      <p> in which the person may be asked to identify from among several choices a fact, a word, or other item from memory. </p>`, 
      options: cogpsy_q45_options, 
      required: true, 
      horizontal: true,},  
    ],
  };

  var cogpsy_q6_options = ["implicit memory; explicit memory", "recognition memory, recall memory", "explicit memory; implicit memory", "recall memory, recognition memory"];

var cogpsy_q6 = {
    type: jsPsychSurveyMultiChoice,
    questions: [
      {prompt: `<p> Raphael is an amnesia patient. </p>
      <p> When specifically asked to remember a particular set of information, Raphael does poorly.</p> 
      <p> When indirectly measured on the same information he shows signs of learning. </p>
      <p> This show that ____ is impaired by amnesia while ____ is not impaired.`, 
      options: cogpsy_q6_options, required: true, horizontal: false,},
    ],
  };



var cogpsy_summary = {
    type: jsPsychSurveyText,
    questions: [
      {prompt: `<p>Please recall what you learned from ChatGPT and write  a summary of it. </p> 
      <p>Be aware that the summary will be assessed based on the extent of knowledge you have condensed and the level of detail included.</p>
      <p>Time limit: 5 minutes Length: no less than 250 words. </p>`, 
      placeholder: 'The firt thing I learned about Memory from my interaction with ChatGPT was...', 
      rows:20, 
      columns: 100,
    required: true}
    ]
  };
