(this.webpackJsonpgrocerywebsite=this.webpackJsonpgrocerywebsite||[]).push([[0],{117:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),s=n.n(a),i=(n(74),n(7)),o=(n(75),n(127)),l=n(122),d=n(128),u=n(125),j=n(22),h=n(12),p=n(21),b=Object(p.b)({name:"routeChange",initialState:{route:"loggedout"},reducers:{changeRoute:function(e,t){e.route=t.payload}}}),m=b.actions.changeRoute,O=b.reducer,f=Object(p.b)({name:"loadUser",initialState:{user:{}},reducers:{loadUserAccount:function(e,t){return Object.assign({},e,{user:t.payload})}}}),x=f.actions.loadUserAccount,g=f.reducer,y=Object(p.b)({name:"changeDisplay",initialState:{display:" "},reducers:{changeDisplay:function(e,t){e.display=t.payload}}}),v=y.actions.changeDisplay,C=y.reducer,S=n(32),I=n(33),k=(n(84),n(1)),N=r.a.forwardRef((function(e,t){var n=e.children,c=e.onClick;return Object(k.jsxs)("a",{href:"/dropdown",ref:t,onClick:function(e){e.preventDefault(),c(e)},style:{color:"white"},children:[Object(k.jsx)(S.a,{icon:I.e,style:{fontSize:"1.75rem"},className:"hover-border"}),n]})})),T=function(e){var t=e.cartItems,n=Object(h.b)(),c=Object(h.c)((function(e){return e.routeChange.route}));return Object(k.jsx)(o.a,{style:{backgroundColor:"#131921"},variant:"dark",sticky:"top",expand:"sm",children:Object(k.jsxs)(l.a,{children:[Object(k.jsx)(o.a.Brand,{as:j.b,to:"/",children:Object(k.jsxs)("span",{className:"brand-name h4",children:["Thrifty",Object(k.jsx)("span",{className:"box-text",children:"Box"})]})}),Object(k.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:"loggedin"===c?Object(k.jsxs)(d.a,{className:"ms-auto",style:{gap:"30px",display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(k.jsxs)("div",{style:{display:"flex"},className:"cart",children:[Object(k.jsx)(d.a.Link,{as:j.b,to:"/cart",style:{color:"white"},className:"hover-border",children:Object(k.jsx)(S.a,{icon:I.c,style:{fontSize:"1.75rem"}})}),Object(k.jsx)("span",{style:{fontWeight:"bold",color:"white",marginLeft:"2px"},children:t})]}),Object(k.jsxs)(u.a,{children:[Object(k.jsx)(u.a.Toggle,{as:N,id:"dropdown-custom-components"}),Object(k.jsxs)(u.a.Menu,{style:{textAlign:"center",margin:"15px -100px"},children:[Object(k.jsx)(u.a.Item,{children:Object(k.jsx)(d.a.Link,{as:j.b,to:"/profile",style:{color:"black"},children:"My Profile"})}),Object(k.jsx)(u.a.Item,{children:Object(k.jsx)(d.a.Link,{onClick:function(){n(x(" ")),n(m("loggedout")),localStorage.removeItem("user"),localStorage.removeItem("id")},style:{color:"black"},children:"Sign Out"})})]})]})]}):Object(k.jsxs)(d.a,{className:"ms-auto",style:{gap:"10px"},children:[Object(k.jsx)(d.a.Item,{style:{cursor:"pointer"},onClick:function(){return n(v("register"))},children:Object(k.jsx)("h5",{className:"black",children:"Register"})}),Object(k.jsx)(d.a.Item,{style:{cursor:"pointer"},onClick:function(){return n(v("signin"))},children:Object(k.jsx)("h5",{className:"black",children:"Sign In"})})]})})]})})},w=n(9),E=n(123),q=n(130),F=n(129),J=n(67),_=Object(p.b)({name:"changeCartTotal",initialState:{total:0},reducers:{IncreaseTotal:function(e){e.total+=1},DecreaseTotal:function(e){e.total-=1},SetTotal:function(e,t){e.total=t.payload}}}),R=_.actions,L=R.IncreaseTotal,A=R.DecreaseTotal,D=R.SetTotal,B=_.reducer,P=function(e){var t=e.id,n=void 0===t?0:t,r=e.image,a=e.brandName,s=e.productName,o=e.price,l=e.userId,d=void 0===l?0:l,u=e.status,j=Object(c.useState)("Add To Cart"),p=Object(i.a)(j,2),b=p[0],m=p[1],O=Object(c.useState)(!1),f=Object(i.a)(O,2),x=f[0],g=f[1],y=Object(c.useState)("primary"),v=Object(i.a)(y,2),C=v[0],S=v[1],I=Object(h.b)();Object(c.useEffect)((function(){if(u)for(var e=0;e<u.length;e++)u[e].product_id===n&&"T"===u[e].cart_status&&(m("Item In Cart"),g(!0),S("dark"))}),[u,n]);return Object(k.jsxs)(F.a,{style:{width:"18rem",margin:"20px",borderRadius:"15px"},children:[Object(k.jsx)(F.a.Img,{style:{width:"100%",height:"30vh",objectFit:"scale-down",padding:"10px"},variant:"top",src:r}),Object(k.jsxs)(F.a.Body,{children:[Object(k.jsx)(F.a.Subtitle,{children:a}),Object(k.jsx)(F.a.Title,{children:s}),Object(k.jsxs)(F.a.Text,{children:["Rs.",o]}),Object(k.jsx)(J.a,{disabled:x,variant:C,onClick:function(){m("Item In Cart"),g(!0),S("dark"),d&&(fetch("https://young-refuge-95269.herokuapp.com/cart",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:n,customerId:d,status:"T"})}),fetch("https://young-refuge-95269.herokuapp.com/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:d,operation:"I"})}).then((function(e){return e.json()})).then(I(L())))},children:b})]})]})},z=(n(92),function(e){var t=e.products,n=e.userId,r=void 0===n?0:n,a=Object(c.useState)([]),s=Object(i.a)(a,2),o=s[0],l=s[1];return Object(c.useEffect)((function(){fetch("https://young-refuge-95269.herokuapp.com/getitemcartstatus",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:r})}).then((function(e){return e.json()})).then((function(e){return l(e)})).catch((function(e){return console.log("Request Failed")}))}),[r]),r?t&&o?Object(k.jsx)("div",{className:"ProductCardList",children:t.map((function(e,n){return Object(k.jsx)(P,{id:t[n].product_id,image:t[n].img,brandName:t[n].brand_name,productName:t[n].product_name,price:t[n].price,userId:r,status:o},t[n].product_id)}))}):Object(k.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(k.jsx)(E.a,{animation:"border",role:"status",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):Object(k.jsx)(q.a,{variant:"primary",style:{textAlign:"center"},children:"Please Sign In/Register First"})}),G=n(40),X=n.n(G),Q=n(57),K=function(e){var t=e.index,n=e.id,r=e.productName,a=e.price,s=e.img,o=e.quantity,l=e.custId,d=Object(c.useContext)(H),u=Object(i.a)(d,2)[1],j=Object(c.useContext)(U),p=Object(i.a)(j,2),b=p[0],m=p[1],O=Object(h.b)(),f=Object(c.useState)(o),x=Object(i.a)(f,2),g=x[0],y=x[1];Object(c.useEffect)((function(){fetch("https://young-refuge-95269.herokuapp.com/updatecartitemqty",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartItemId:n,qty:g})}).catch((function(e){return console.log("Request Failed")}))}),[g,n]);return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(k.jsx)("img",{src:s,alt:"item",style:{margin:"5px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-all"},children:[Object(k.jsx)("h3",{style:{margin:"5px"},children:r}),Object(k.jsxs)("h3",{style:{margin:"5px"},children:["Rs.",a*g]})]})]}),Object(k.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"},children:[Object(k.jsx)(J.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){g<4&&(y(g+1),u((function(e){return e+Number(a)})))},children:Object(k.jsx)(S.a,{size:"lg",style:{fontSize:"1rem"},icon:I.b})}),Object(k.jsx)("h4",{children:g}),Object(k.jsx)(J.a,{size:"sm",variant:"outline-primary",style:{margin:"20px"},onClick:function(){g>1&&(y(g-1),u((function(e){return e-Number(a)})))},children:Object(k.jsx)(S.a,{size:"lg",style:{fontSize:"1rem"},icon:I.a})}),Object(k.jsx)(J.a,{size:"md",variant:"outline-danger",style:{margin:"10px"},onClick:function(){b.splice(t,1),m(b),u((function(e){return e-Number(a)*g})),fetch("https://young-refuge-95269.herokuapp.com/removecartitem",{method:"delete",headers:{"Content-Type":"application/json"},body:JSON.stringify({item_id:n})}),fetch("https://young-refuge-95269.herokuapp.com/carttotalitems",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:l,operation:"D"})}).then((function(e){return e.json()})).then(O(A()))},children:Object(k.jsx)(S.a,{size:"lg",style:{fontSize:"1rem"},icon:I.d})})]})]})},Z=n(58),Y=n(124),H=Object(c.createContext)(),U=Object(c.createContext)(),W=function(e){var t=e.customerId,n=void 0===t?0:t,r=Object(c.useState)(null),a=Object(i.a)(r,2),s=a[0],o=a[1],l=Object(c.useState)(0),d=Object(i.a)(l,2),u=d[0],j=d[1];return Object(c.useEffect)((function(){var e=!0;return fetch("https://young-refuge-95269.herokuapp.com/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:n})}).then((function(e){return e.json()})).then((function(t){e&&o(t)})).catch((function(e){return console.log("Request Failed")})),function(){e=!1}}),[n]),s?s.length>0?Object(k.jsxs)("div",{style:{display:"flex",alignContent:"center"},children:[Object(k.jsxs)(Y.a,{style:{padding:"5px"},children:[s.map((function(e,t){return 0===u&&j((function(e){return e+s[t].price*s[t].qty})),Object(k.jsx)(Y.a.Item,{children:Object(k.jsx)(H.Provider,{value:[u,j],children:Object(k.jsx)(U.Provider,{value:[s,o],children:Object(k.jsx)(K,{index:t,id:s[t].cart_item_id,productName:s[t].product_name,price:s[t].price,img:s[t].img,quantity:s[t].qty,custId:n},s[t].cart_item_id)})})},t)})),Object(k.jsxs)("div",{className:"text-center",children:[Object(k.jsxs)("h3",{id:"totalPrice",children:["Total:Rs.",u]}),Object(k.jsx)(J.a,{type:"submit",onClick:function(){fetch("https://young-refuge-95269.herokuapp.com/create-checkout-session",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*u})}).then((function(e){return e.json()})).then(function(){var e=Object(Q.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)("pk_test_51JmIXVSBM1qtXmvlx74yuerGEmGuKSxOQ7Ej0XDdZrpZQFasZ4XObY9hCWjeQEXA5GDH1QBgPShHtdlKKJBBYCE400KZp54zhq");case 2:e.sent.redirectToCheckout({sessionId:t.id});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Checkout"})]})]}),Object(k.jsxs)("div",{className:"text-center",style:{padding:"10px"},children:[Object(k.jsxs)("h3",{id:"totalPrice",children:["Total:Rs.",u]}),Object(k.jsx)(J.a,{type:"submit",onClick:function(){fetch("https://young-refuge-95269.herokuapp.com/create-checkout-session",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:100*u})}).then((function(e){return e.json()})).then(function(){var e=Object(Q.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Z.a)("pk_test_51JmIXVSBM1qtXmvlx74yuerGEmGuKSxOQ7Ej0XDdZrpZQFasZ4XObY9hCWjeQEXA5GDH1QBgPShHtdlKKJBBYCE400KZp54zhq");case 2:e.sent.redirectToCheckout({sessionId:t.id});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Checkout"})]})]}):0===s.length?Object(k.jsx)("h1",{style:{textAlign:"center"},children:"Cart is empty"}):void 0:Object(k.jsx)("div",{style:{textAlign:"center",padding:"100px"},children:Object(k.jsx)(E.a,{animation:"border",role:"status",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},M=n(68),V=function(e){var t=e.product_name,n=e.qty,c=e.img,r=e.price,a=e.date;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("h3",{children:["Purchased on : ",a.slice(0,10)]}),Object(k.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(k.jsx)("img",{src:c,alt:"item",style:{margin:"10px",width:"100px",height:"100px",objectFit:"scale-down"}}),Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column",wordBreak:"break-word"},children:[Object(k.jsx)("h3",{children:t}),Object(k.jsxs)("h3",{children:["Qty:",n]}),Object(k.jsxs)("h3",{children:["Rs.",r]})]})]})]})},$=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){var e=!0,t=localStorage.getItem("user"),n=JSON.parse(t).id;return fetch("https://young-refuge-95269.herokuapp.com/gettingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:n})}).then((function(e){return e.json()})).then((function(t){e&&r(t)})).catch((function(e){return console.log("Request Failed")})),function(){e=!1}}),[]),n?0===n.length?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h3",{children:"You Have No Orders!"}),Object(k.jsx)(j.b,{to:"/",children:Object(k.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h3",{children:"Your Orders:"}),Object(k.jsx)(Y.a,{children:n.map((function(e,t){return Object(k.jsx)(M.a,{children:Object(k.jsx)(V,{id:n[t].order_id,product_name:n[t].product_name,img:n[t].img,price:n[t].price,qty:n[t].qty,date:n[t].date},n[t].order_id)},n[t].order_id)}))})]}):Object(k.jsx)(E.a,{animation:"border",role:"status",children:Object(k.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},ee=function(e){var t=e.Name,n=e.Email;return Object(k.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[Object(k.jsxs)("h3",{children:["Name:",t]}),Object(k.jsxs)("h3",{style:{wordBreak:"break-word"},children:["Email:",n]}),Object(k.jsx)($,{})]})},te=n(126),ne=(n(59),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],l=s[1],d=Object(c.useState)(""),u=Object(i.a)(d,2),j=u[0],p=u[1],b=Object(c.useState)(""),O=Object(i.a)(b,2),f=O[0],g=O[1],y=Object(h.b)();return Object(k.jsxs)(te.a,{children:[Object(k.jsxs)(te.a.Group,{className:"mb-3",controlId:"fname",children:[Object(k.jsx)(te.a.Label,{children:"First Name"}),Object(k.jsx)(te.a.Control,{type:"text",placeholder:"Enter First Name:",onChange:function(e){l(e.target.value)}})]}),Object(k.jsxs)(te.a.Group,{className:"mb-3",controlId:"lname",children:[Object(k.jsx)(te.a.Label,{children:"Last Name"}),Object(k.jsx)(te.a.Control,{type:"text",placeholder:"Enter Last Name:",onChange:function(e){p(e.target.value)}})]}),Object(k.jsxs)(te.a.Group,{className:"mb-3",controlId:"email",children:[Object(k.jsx)(te.a.Label,{children:"Email Address:"}),Object(k.jsx)(te.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){r(e.target.value)}})]}),Object(k.jsxs)(te.a.Group,{className:"mb-3",controlId:"password",children:[Object(k.jsx)(te.a.Label,{children:"Password:"}),Object(k.jsx)(te.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){g(e.target.value)}})]}),Object(k.jsx)(J.a,{variant:"primary",onClick:function(){fetch("https://young-refuge-95269.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({fname:o,lname:j,email:n,password:f})}).then((function(e){return e.json()})).then((function(e){e.id&&(y(m("loggedin")),y(v(" ")),y(x(e)))})).catch((function(e){return console.log("Request Failed")}))},children:"Register"})]})}),ce=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(i.a)(a,2),o=s[0],l=s[1],d=Object(h.b)();return Object(k.jsxs)(te.a,{children:[Object(k.jsxs)(te.a.Group,{className:"mb-3",controlId:"email",children:[Object(k.jsx)(te.a.Label,{children:"Email Address:"}),Object(k.jsx)(te.a.Control,{type:"email",placeholder:"Enter Email Address:",onChange:function(e){r(e.target.value)}})]}),Object(k.jsxs)(te.a.Group,{className:"mb-3",controlId:"password",children:[Object(k.jsx)(te.a.Label,{children:"Password:"}),Object(k.jsx)(te.a.Control,{type:"password",placeholder:"Enter Password:",onChange:function(e){l(e.target.value)}})]}),Object(k.jsx)(J.a,{variant:"primary",onClick:function(){fetch("https://young-refuge-95269.herokuapp.com/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n,password:o})}).then((function(e){return e.json()})).then((function(e){e.id&&(d(m("loggedout")),d(v(" ")),d(x(e)))})).catch((function(e){return console.log("Request Failed")}))},children:"Sign In"})]})},re=function(e){var t=e.userId;return Object(c.useEffect)((function(){var e={};fetch("https://young-refuge-95269.herokuapp.com/cartitem",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerId:t})}).then((function(e){return e.json()})).then((function(n){Object.assign(e,n),Object.keys(e).map((function(n){return fetch("https://young-refuge-95269.herokuapp.com/creatingOrder",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:t,productName:e[n].product_name,qty:e[n].qty,price:e[n].price*e[n].qty,img:e[n].img})})}))})).catch((function(e){return console.log("Request Failed")}))}),[t]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h1",{style:{textAlign:"center"},children:"Your Order Is successful"}),Object(k.jsx)(j.b,{to:"/",children:Object(k.jsx)("h2",{style:{textAlign:"center"},children:"Continue Shopping"})})]})},ae=function(){var e=Object(h.c)((function(e){return e.changeDisplay.display})),t=Object(c.useState)(null),n=Object(i.a)(t,2),r=n[0],a=n[1],s=Object(h.c)((function(e){return e.changeCartTotal.total})),o=Object(h.c)((function(e){return e.loadUser.user})),l=Object(h.b)();Object(c.useEffect)((function(){null!=localStorage.getItem("user")&&l(x(JSON.parse(localStorage.getItem("user")))),fetch("https://young-refuge-95269.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return console.log("Request Failed")}))}),[l]),Object(c.useEffect)((function(){o.id&&(l(m("loggedin")),l(v(" ")),localStorage.setItem("user",JSON.stringify({id:o.id,email:o.email,name:o.name})),fetch("https://young-refuge-95269.herokuapp.com/getCartTotalItems",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({custId:o.id})}).then((function(e){return e.json()})).then((function(e){return l(D(e.cart_items))})).catch((function(e){return console.log("Request Failed")})))}),[o,l]);var d="";return"register"===e?d=Object(k.jsx)(ne,{}):"signin"===e&&(d=Object(k.jsx)(ce,{})),Object(k.jsx)(j.a,{children:Object(k.jsxs)(w.c,{children:[Object(k.jsxs)(w.a,{exact:!0,path:"/",children:[Object(k.jsx)(T,{cartItems:s}),d,Object(k.jsx)(z,{products:r,userId:o.id})]}),Object(k.jsx)(w.a,{path:"/cart",children:Object(k.jsx)(W,{customerId:o.id})}),Object(k.jsx)(w.a,{path:"/profile",children:Object(k.jsx)(ee,{Name:o.name,Email:o.email})}),Object(k.jsx)(w.a,{path:"/orderdone",children:Object(k.jsx)(re,{userId:o.id})})]})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},ie=(n(94),n(116),Object(p.a)({reducer:{loadUser:g,routeChange:O,changeDisplay:C,changeCartTotal:B}}));s.a.render(Object(k.jsx)(h.a,{store:ie,children:Object(k.jsx)(ae,{})}),document.getElementById("root")),se()},59:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},84:function(e,t,n){},92:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.c084fe73.chunk.js.map