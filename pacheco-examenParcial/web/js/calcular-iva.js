Ext.application({
   launch:function(){
   name:'examen-parcial',
       Ext.create('Ext.TabPanel',{
          fullscreen:true,
          tabBarPosition:'bottom',
          items:[formulario]
          
       })
     }
   };
   
   var formulario={
       
       xtype:'fielset',
       title:'ingresa el valor del subtotal',
       iconCls: 'user',
       items:[
           {
          xtype:'button',
          text:'calcular',
          ui:'confirmar',
           },
           {
        xtype:'fielset',
        title:'IVA',
        iconCls:'user'
        items[
            {
          xtype:'button',
          text:'boton',
          ui:'confirmar',   
            } 
        ]
          },
          {
        xtype:'fielset',
        title:'Retencion IVA'
        iconCls:'user'
        items[
        }
            {
          xtype:'button',
          text:'boton',
          ui:'confirmar',
        ]
        },
          {
        xtype:'fielset',
        title:'ISR'
        iconCls:'user'
        items[
            {
          xtype:'button',
          text:'boton',
          ui:'confirmar',    
            }
            
        ]
          },
          {
        xtype:'fielset',
        title:'Total a pagar'
        iconCls:'user'
        items[
            {
          xtype:'button',
          text:'boton',
          ui:'confirmar',    
            }
            
        ]
          }, 
            
           {                        
          handler:function(){
            var i=Ext.getCmp('textosubtotal').getValue();
            var res=i*0.16;
          Ext.Msg.alert("IVA"+res);}          
          },
        {
          xtype:'textfield',
          placeHolder:'Escribe aqui el subtotal'
        },
        {
            html:['<center><h1>Calculo de IVA</h1>',
            '<p>   </p>',
        '</center>'].join('') },
       
       {                        
          handler:function(){
            var i=Ext.getCmp('textoiva').getValue();
            var res1=(i/3)*2;
          Ext.Msg.alert("Retencion de IVA"+res1);}          
          },
          
          {                        
          handler:function(){
            var j=Ext.getCmp('subtotal').getValue();
            var res2=j*0.10;
          Ext.Msg.alert("ISR"+res2);}          
          },
       
           {
       var x=Ext.getCmp('total').getValue();
       var res3=res1-res-res2;
       Ext.Msg.alert("TOTAL"+res3)
              },  
     ]    
   
          
          