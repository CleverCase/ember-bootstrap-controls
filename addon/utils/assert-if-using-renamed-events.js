import Ember from 'ember';

export default function asserIfUsingRenamedEvents(component) {
  const keyPress = component.get('keyPress');
  if (keyPress) {
    assertEvent('keyPress');
  }

  const keyUp = component.get('keyUp');
  if (keyUp) {
    assertEvent('keyUp');
  }

  const keyDown = component.get('keyDown');
  if (keyDown) {
    assertEvent('keyDown');
  }
}

function assertEvent(eventName) {
  const dasherizedEventName = Ember.String.dasherize(eventName);
  Ember.assert(`This event has been renamed from "${eventName}" to "${dasherizedEventName}", please rename occordingly`);
}
