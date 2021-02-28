describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75')
    .then(($el) => {
      expect($el).to.have.value(75)
    }) 
  })

  it('Testing volume slider', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    .then(($el) => {
      expect($el).to.have.value(33)
    })
  });

  it('testing audio change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input')
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.prop('volume', .33)
    })
  })

  it('image and sound corresponding change', () => {
    cy.get('#radio-air-horn').invoke('click')
    cy.get('#sound-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/images/air-horn.svg')
    })
    cy.get('#horn-sound')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/audio/air-horn.mp3')
    })
  })

  it('testing audio level 3', () => {
    cy.get('#volume-slider').invoke('val', 80).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-3.svg')
    })
  })

  it('testing audio level 2', () => {
    cy.get('#volume-slider').invoke('val', 40).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-2.svg')
    })
  })

  it('testing audio level 1', () => {
    cy.get('#volume-slider').invoke('val', 10).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-1.svg')
    })
  })

  it('testing audio level 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#volume-image')
    .then(($el) => {
      expect($el).to.have.attr('src','./assets/media/icons/volume-level-0.svg')
    })
  })

  it('testing honk button disabled', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input')
    cy.get('#honk-btn')
    .then(($el) => {
      expect($el).to.be.disabled
    })
  })

  it('invalid input error testing', () => {
    cy.get('#volume-number').clear().type('101')
    cy.get(':invalid')
    .then(($el) => {
      expect($el).to.exist;
    })
  })
});
