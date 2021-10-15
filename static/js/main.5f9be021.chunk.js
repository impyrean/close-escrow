(this["webpackJsonpclose-escrow"]=this["webpackJsonpclose-escrow"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(4),s=t.n(i),c=(t(9),t(2)),o=[{finePrint:"Not required for first sale of new property",issuer:{application:"https://sfdbi.org/applying3R",cost:"$148",name:"San Francisco Department of Building Inspection",time:"9 business days"},name:{primary:"3R",secondary:"Report of Residential Building Record"},requiredBy:{frequency:"common",name:"San Francisco",type:"City & County"}},{addOns:[{description:"Underground Storage Tanks must be removed prior to closing escrow"}],issuer:{contractor:"http://www.ggtr.com/",cost:"$80",name:"Several inspectors",time:"3 business days"},name:{primary:"Bureau of Fire Prevention Permit"},requiredBy:{frequency:"sometimes",name:"San Francisco",type:"City & County"}},{finePrint:"There is no entity that follows up on this requirement",issuer:{cost:"$123",name:"Several approved inspectors",time:"3 business days"},name:{primary:"Energy and Water Conservation Certificate"},requiredBy:{frequency:"rare",name:"San Francisco",type:"City & County"}},{finePrint:"Not required if sewer lateral was completely replaced in the past 20 years",issuer:{cost:"$400",name:"East Bay Municipal Utility District (EBMUD)",time:"14 business days"},name:{primary:"PSL",secondary:"Private Sewer Lateral Inspection"},requiredBy:{frequency:"common",name:"Oakland",type:"City"}},{issuer:{cost:"$85",name:"Oakland Department of Transportation",time:"3 business days"},name:{primary:"Sidewalk Certification"},requiredBy:{frequency:"common",name:"Oakland",type:"City"}}],l=["Alhambra","Anaheim","Antioch","Arden-Arcade","Bakersfield","Berkeley","Burbank","Carlsbad","Carson","Chico","Chino","Chula Vista","Citrus Heights","Clovis","Compton","Concord","Corona","Costa Mesa","Daly City","Downey","East Los Angeles","El Cajon","El Monte","Elk Grove","Escondido","Fairfield","Fontana","Fremont","Fresno","Fullerton","Garden Grove","Glendale","Hawthorne","Hayward","Hemet","Hesperia","Huntington Beach","Indio","Inglewood","Irvine","Jurupa Valley","Lancaster","Livermore","Long Beach","Los Angeles","Menifee","Mission Viejo","Modesto","Moreno Valley","Murrieta","Newport Beach","Norwalk","Oakland","Oceanside","Ontario","Orange","Oxnard","Palmdale","Pasadena","Pomona","Rancho Cucamonga","Redding","Redwood City","Rialto","Richmond","Riverside","Roseville","Sacramento","Salinas","San Bernardino","San Buenaventura","San Diego","San Francisco","San Jose","San Leandro","San Marcos","San Mateo","Santa Ana","Santa Barbara","Santa Clara","Santa Clarita","Santa Maria","Santa Monica","Santa Rosa","Simi Valley","South Gate","Stockton","Sunnyvale","Temecula","Thousand Oaks","Torrance","Tracy","Vacaville","Vallejo","Victorville","Visalia","Vista","West Covina","Westminster","Whittier"],u=t(0),d=function(e){var n=e.addOn;return Object(u.jsx)("div",{children:n.description})},j=function(e){var n=e.addOns;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Notes"}),n.map((function(e,n){return Object(u.jsx)(d,{addOn:e},n)}))]})},h=function(e){var n=e.issuer,t=n.application,a=n.contractor,r=n.cost,i=n.name,s=n.time;return Object(u.jsxs)("div",{className:"Issuer",children:[Object(u.jsx)("h3",{children:"Issued By"}),Object(u.jsx)("div",{children:i}),Object(u.jsxs)("div",{children:["Cost: ",r]}),Object(u.jsxs)("div",{children:["Procurement time: ",s]}),t?Object(u.jsxs)("div",{children:["Apply here:\xa0",Object(u.jsx)("a",{href:t,target:"_blank",children:t})]}):null,a?Object(u.jsxs)("div",{children:["Contractor:\xa0",Object(u.jsx)("a",{href:a,target:"_blank",children:a})]}):null]})},m=function(e){var n=e.text;return Object(u.jsxs)("div",{className:"FinePrint",children:["*",n]})},y=function(e){var n=e.hasFinePrint,t=e.requiredBy,a=t.name,r=t.type,i=n?"*":"";return Object(u.jsxs)("div",{children:["Required",i," by ",r," of ",a]})},b=function(e){var n=e.document,t=e.index,a=n.addOns,r=n.finePrint,i=n.issuer,s=n.name,c=n.requiredBy,o=s.secondary?" (".concat(s.secondary,")"):"",l="".concat(s.primary).concat(o);return Object(u.jsxs)("div",{className:"Document card",children:[Object(u.jsxs)("h2",{children:[Object(u.jsxs)("span",{className:"Index",children:["#",t]}),"\xa0\xa0",l]}),Object(u.jsx)(y,{hasFinePrint:void 0!==r,requiredBy:c}),i?Object(u.jsx)(h,{issuer:i}):null,a&&a.length?Object(u.jsx)(j,{addOns:a}):null,r?Object(u.jsx)(m,{text:r}):null]})},O=function(){return Object(u.jsx)("h3",{className:"NoResults",children:"This demo app does not work for the city you entered. Try San Francisco or Oakland instead."})},p=function(e){var n=e.onClick;return Object(u.jsx)("a",{href:"/",onClick:n,children:"< Back to Search"})},v=function(e){var n=e.results,t=e.city,a=e.onClickBack,r="".concat(n.length," documents are required to close escrow in ").concat(t);return Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(p,{onClick:a}),Object(u.jsx)("h1",{children:r}),n.map((function(e,n){return Object(u.jsx)(b,{document:e,index:n+1},n)}))]})},S=function(e){var n=e.suggestion,t=e.onClick;return Object(u.jsx)("div",{className:"SearchSuggestion",onClick:t,children:n})},f=function(e){var n=e.onSelectCity,t=e.suggestions;return Object(u.jsx)("div",{className:"SearchSuggestions",children:t.map((function(e,t){return Object(u.jsx)(S,{suggestion:e,onClick:n},t)}))})},g=function(e){var n=e.onSearchInputChange,t=e.onSelectCity,r=e.searchInput,i=e.shouldShowSuggestions,s=Object(a.useState)([]),o=Object(c.a)(s,2),d=o[0],j=o[1];return Object(u.jsxs)("div",{className:"SearchPage",children:[Object(u.jsx)("h1",{children:"Know What You Need To Close Escrow"}),Object(u.jsxs)("div",{className:"SearchInputAndSuggestions",children:[Object(u.jsx)("input",{autoFocus:!0,className:"SearchInput",onChange:function(e){n(e);var t=e.target.value.toLowerCase(),a=""===t?[]:l.filter((function(e){return e.toLowerCase().startsWith(t)})).slice(0,4);j(a)},placeholder:"Enter a city name, like San Francisco",type:"text",value:r}),i?Object(u.jsx)(f,{onSelectCity:t,suggestions:d}):null]}),i?null:Object(u.jsx)(O,{})]})},x=function(){var e=Object(a.useState)(!0),n=Object(c.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)(""),s=Object(c.a)(i,2),l=s[0],d=s[1],j=Object(a.useState)(void 0),h=Object(c.a)(j,2),m=h[0],y=h[1],b=Object(a.useState)([]),O=Object(c.a)(b,2),p=O[0],S=O[1];return Object(u.jsx)("div",{className:"fullHeight",children:0===p.length?Object(u.jsx)(g,{onSearchInputChange:function(e){r(!0),d(e.target.value)},onSelectCity:function(e){var n=e.target.textContent,t=o.filter((function(e){return e.requiredBy.name===n}));y(n),d(n),S(t),r(!1)},searchInput:l,shouldShowSuggestions:t}):Object(u.jsx)(v,{city:m,onClickBack:function(e){e.preventDefault(),r(!0),d(""),y(void 0),S([])},results:p})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.5f9be021.chunk.js.map