// Example speaker data (this could come from an API in a real-world scenario)
const speakers = {
    1: { 
      name: 'John Deo', 
      title: 'Chief Marketing Officer', 
      company: 'Company 1',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker1.png'
    },
    2: { 
      name: 'Vicky', 
      title: 'Chief Engagement Officer', 
      company: 'Company 2',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker2.png'
    },
    3: { 
      name: 'Rohan', 
      title: 'Chief Technical Developer', 
      company: 'Specbee',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker3.png'
    },
    4: { 
      name: 'Karunakar', 
      title: 'Chief Marketing Officer', 
      company: 'Company 4',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker4.png'
    },
    5: { 
      name: 'Singh', 
      title: 'Chief Technical Developer', 
      company: 'Company 5',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker1.png'
    },
    6: { 
      name: 'LeoDas', 
      title: 'Chief Engagement Officer', 
      company: 'Company 6',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker2.png'
    },
    7: { 
      name: 'Parthiban', 
      title: 'Chief Marketing Officer', 
      company: 'Company 7',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker3.png'
    },
    8: { 
      name: 'Gandhi', 
      title: 'Chief Technical Developer', 
      company: 'Company 8',
      info: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.',
      image: 'images/speaker4.png'
    }
  };
  
  // Event listener for speaker cards
  document.querySelectorAll('.speaker-slider__card').forEach(card => {
    card.addEventListener('click', function () {
      const speakerId = this.getAttribute('data-speaker-id');
      const speakerDetails = speakers[speakerId];
  
      // Update popover content with speaker details
      document.getElementById('popover-name').textContent = speakerDetails.name;
      document.getElementById('popover-info').textContent = speakerDetails.info;
  
      // Update title and company
      const titleElement = document.querySelector('.popover-subname');
      titleElement.textContent = speakerDetails.title;
  
      const companyElement = document.querySelector('.popover-subname2');
      companyElement.textContent = speakerDetails.company;
  
      // Update speaker image
      const speakerImage = document.querySelector('.speaker-slider__image');
      speakerImage.src = speakerDetails.image;
  
      // Show popover
      document.getElementById('speaker-details').classList.remove('d-none');
    });
  });
  
  // Event listener for closing popover
  document.querySelector('.speaker-slider__popover-close').addEventListener('click', function () {
    document.getElementById('speaker-details').classList.add('d-none');
  });
  