import $ from 'jquery';
import 'modernizr';
import noop from 'no-op';

$(() => {
  $('#noop').on('click', () => {
    // eslint-disable-next-line
    console.log(noop, noop());
    alert('Nothing was done!');
  });
});
