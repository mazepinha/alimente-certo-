class Link{

constructor(bodyA,bodyB){

    var last_link=bodyA.body.bodies.length-2;
    this.Link=Constraint.create( {
        bodyA:bodyA.body.bodies[last_link],
        pointA:{x:0,y:0},
        bodyB:bodyB,
        pointB:{x:0,y:0},
        length:-10,
        stiffness:0.01
    });

    World.add(engine.world,this.Link);
};
//função para cortar a corda
separar(){
    World.remove(engine.world,this.Link);

};
};


