export default function() {
  // this.transition(
  //     this.hasClass('ember-view'),
  //     this.use('toDown')
  // );
  this.transition(
      this.fromRoute('index'),
      this.use('toDown'),
      this.reverse('toUp')
  );
  this.transition(
      this.fromRoute('panels'),
      this.use('toLeft'),
      this.reverse('toRight')
  );
  this.transition(
      this.fromRoute('inputs'),
      this.use('toLeft'),
      this.reverse('toRight')
  );
  this.transition(
      this.fromRoute('combos'),
      this.use('toLeft'),
      this.reverse('toRight')
  );
  this.transition(
      this.fromRoute('buttons'),
      this.use('toLeft'),
      this.reverse('toRight')
  );
  this.transition(
      this.fromRoute('grids'),
      this.use('toLeft'),
      this.reverse('toRight')
  );
  this.transition(
      this.fromRoute('paginator'),
      this.use('toLeft'),
      this.reverse('toRight')
  );
}
