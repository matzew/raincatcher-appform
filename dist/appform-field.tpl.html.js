var ngModule;
try {
  ngModule = angular.module('wfm.appform.directives');
} catch (e) {
  ngModule = angular.module('wfm.appform.directives', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('wfm-template/appform-field.tpl.html',
    '<!--\n' +
    ' CONFIDENTIAL\n' +
    ' Copyright 2016 Red Hat, Inc. and/or its affiliates.\n' +
    ' This is unpublished proprietary source code of Red Hat.\n' +
    '-->\n' +
    '<ng-form name="fieldForm" ng-submit="ctrl.submit()">\n' +
    '  <div ng-switch="ctrl.field.props.type">\n' +
    '\n' +
    '    <div ng-switch-when="number">\n' +
    '      <appform-field-number model="ctrl.model" field="ctrl.field"></appform-field-number>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="location">\n' +
    '      <appform-field-location model="ctrl.model" field="ctrl.field"></appform-field-location>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="signature" flex class="appform-signature">\n' +
    '      <md-input-container class="md-block">\n' +
    '        <p class="md-caption">{{ctrl.field.props.name}}</p>\n' +
    '        <signature-form value="ctrl.model.value"></signature-form>\n' +
    '      </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-default flex>\n' +
    '      <md-input-container class="md-block">\n' +
    '        <label>{{ctrl.field.props.name}}</label>\n' +
    '        <input\n' +
    '          type="text"\n' +
    '          placeholder="{{ctrl.field.props.helpText}}"\n' +
    '          name="inputName"\n' +
    '          ng-model="ctrl.model.value"\n' +
    '          ng-required="ctrl.field.props.required"\n' +
    '        ></input>\n' +
    '        <div ng-messages="fieldForm.inputName.$error" ng-show="fieldForm.inputName.$dirty || fieldForm.$submitted">\n' +
    '          <div ng-message="required">A {{ctrl.field.props.name}} is required.</div>\n' +
    '        </div>\n' +
    '      </md-input-container>\n' +
    '    </div>\n' +
    '\n' +
    '  </div>\n' +
    '</ng-form>\n' +
    '');
}]);
