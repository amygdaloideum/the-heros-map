import pieces from '../../assets/pieces';
import groups from '../../assets/groups';
import angular from 'angular';

export class groupComponent {

  /*@ngInject*/
  constructor($mdPanel){
    this.groupDescription = groups[this.groupName];
    this.groupPieces = this.getPieces(this.start, this.end);
    this.$mdPanel = $mdPanel;
    this.panelRef;
  }

  $onInit() {

  }

  getPieces(start, end){
    let p = [];
    for(let i = start; i <= end; i++){
      p.push(pieces[i]);
    }
    return p;
  }

  showPanel(ev){
    if(this.panelRef && this.panelRef.isAttached){
      return;
    }
    let position = this.$mdPanel.newPanelPosition()
      .relativeTo(ev.srcElement)
      .addPanelPosition(this.$mdPanel.xPosition.ALIGN_START, this.$mdPanel.yPosition.BELOW);
    var config = {
      attachTo: angular.element(document.body),
      controller: function(){

      },
      controllerAs: 'ctrl',
      template:
      `<div class="group-panel-wrapper">
        <h1>{{ctrl.groupName}}</h1>
        <h3>{{ctrl.desc}}</h2>
        <div ng-repeat="piece in ctrl.pieces">{{piece.number}} {{piece.title}}</div>
      </div>`,
      position: position,
      locals: {
        'desc': this.groupDescription,
        'pieces': this.groupPieces,
        'groupName': this.groupName
      },
      openFrom: ev,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: false,
      zIndex: 2
    };
    this.panelRef = this.$mdPanel.create(config);
    this.panelRef.open();
  }

  closePanel(){
    if(this.panelRef){
      this.panelRef.close();
    }
  }
}

export default angular.module('directives.group', [])
.component('group', {
  template: require('./group.pug'),
  controller: groupComponent,
  controllerAs: "groupComponent",
  bindings: {
    groupName: "@",
    start: "<",
    end: "<"
  }
})
.name;
