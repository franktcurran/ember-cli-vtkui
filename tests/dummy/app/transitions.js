export default function() {
  this.transition(
      this.hasClass('ember-view'),
      this.use('toDown'),
      this.reverse('toUp')
  );
}
