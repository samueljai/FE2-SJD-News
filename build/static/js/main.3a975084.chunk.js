(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/sjd_news_logo.a0c92c3b.png"},25:function(e,t,a){e.exports=a(82)},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),s=(a(30),a(3)),i=a(4),l=a(6),u=a(5),m=a(7),p=(a(32),a(34),a(2)),d=(a(43),function(e){var t=e.heading,a=e.display?"mainHeader active":"mainHeader";return r.a.createElement("header",{className:a},r.a.createElement("h1",null,t))}),h=(a(45),a(13)),g=a.n(h),f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{display:!1,heading:""}),r.a.createElement("main",{className:"homepage"},r.a.createElement("h2",null,"Welcome to"),r.a.createElement("img",{src:g.a,alt:"sjd news logo"})))},v=(a(47),a(11)),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){Object(p.c)("/")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.err;return console.log(t),r.a.createElement("main",null,r.a.createElement("h2",null,"ERROR PAGE"),r.a.createElement("h3",null,"Your error is: "),r.a.createElement("button",{onClick:function(){return e.handleClick()}}," Return to Home"))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",err:""},a.handleChange=function(e){var t=e.target,n=t.id,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.username;(0,a.props.login)(t),a.setState({username:""})},a.handleLogout=function(){(0,a.props.logout)(),a.setState({username:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.err,c=this.props,o=c.user,s=c.loggedIn;return n?r.a.createElement(b,{err:n}):s?r.a.createElement("form",{className:"loginPanel"},r.a.createElement("p",null,"Logged In:"),r.a.createElement("div",{className:"username"},o.username," ICON")," ",r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{className:"loginButtons"},"Account"),r.a.createElement("button",{className:"loginButtons",onClick:function(){return e.handleLogout()}},"Logout"))):r.a.createElement("form",{className:"loginPanel",onSubmit:this.handleSubmit},r.a.createElement("p",null,"Login:"),r.a.createElement("input",{className:"textbox username",type:"text",id:"username",onChange:this.handleChange,value:a,placeholder:"Enter Username here",required:!0}),r.a.createElement("input",{className:"textbox password",type:"text",id:"password",placeholder:"Enter Password here"}),r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{className:"loginButtons",type:"submit"},"Login"),r.a.createElement("button",{className:"loginButtons",type:"submit"},"Sign Up!")))}}]),t}(n.Component),N=function(e){var t=e.toggleSidebar,a=e.user,n=e.loggedIn,c=e.login,o=e.logout;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navBar"},r.a.createElement("img",{src:g.a,alt:"sjd news logo"}),r.a.createElement(E,{user:a,loggedIn:n,login:c,logout:o}),r.a.createElement("section",{className:"navLinks"},r.a.createElement(p.a,{className:"navListItem",to:"/",onClick:function(){return t()}},"HOME"),r.a.createElement(p.a,{className:"navListItem",to:"/topics",onClick:function(){return t()}}," TOPICS"),r.a.createElement(p.a,{className:"navListItem",to:"/articles",onClick:function(){return t()}}," ARTICLES"),r.a.createElement(p.a,{className:"navListItem",to:"/users",onClick:function(){return t()}}," USERS")),r.a.createElement("div",{className:"footer"},r.a.createElement("h6",null,"Developed by:"),r.a.createElement("h4",null,"Samuel Jai"),r.a.createElement("h6",null,"On A Full Stack Developer Journey"),r.a.createElement("h4",null,"\xa9 2019"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/samueljai",rel:"noopener noreferrer",target:"_blank"},"GitHub")," | ",r.a.createElement("a",{href:"https://www.linkedin.com/in/sam-desai",rel:"noopener noreferrer",target:"_blank"},"LinkedIn")," | ",r.a.createElement("a",{href:"https://twitter.com/thisissamueljai",rel:"noopener noreferrer",target:"_blank"},"Twitter")))))},C=(a(49),a(1)),w=a.n(C),S=a(8),y=a(9),O=a.n(y),k="https://sjd-news.herokuapp.com/api",j=function(){var e=Object(S.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(k,"/topics"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.topics);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(S.a)(w.a.mark(function e(t,a,n,r){var c,o,s;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t?"/topics/".concat(t,"/articles"):"/articles",e.next=3,O.a.get("".concat(k).concat(c,"?p=").concat(a,"&&sort_by=").concat(n,"&&sort_ascending=").concat(r));case 3:return o=e.sent,s=o.data,e.abrupt("return",s.articles);case 6:case"end":return e.stop()}},e,this)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),_=function(){var e=Object(S.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(k,"/articles/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.article);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(S.a)(w.a.mark(function e(t,a){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(k,"/articles/").concat(t,"/comments?p=").concat(a));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.comments);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(S.a)(w.a.mark(function e(){var t,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(k,"/users"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a.users);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(S.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(k,"/users/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.user);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(S.a)(w.a.mark(function e(t,a){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(k,"/topics"),{slug:t,description:a});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.topic);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),D=function(){var e=Object(S.a)(w.a.mark(function e(t,a,n,r){var c,o;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(k,"/topics/").concat(t,"/articles"),{title:a,body:n,username:r});case 2:return c=e.sent,o=c.data,e.abrupt("return",o.article);case 5:case"end":return e.stop()}},e,this)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(S.a)(w.a.mark(function e(t,a,n){var r,c;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(k,"/articles/").concat(t,"/comments"),{username:a,body:n});case 2:return r=e.sent,c=r.data,e.abrupt("return",c.comment);case 5:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(S.a)(w.a.mark(function e(t){var a,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("".concat(k,"/articles/").concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(S.a)(w.a.mark(function e(t,a){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("".concat(k,"/articles/").concat(t,"/comments/").concat(a));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),M=function(){var e=Object(S.a)(w.a.mark(function e(t,a,n){var r,c,o;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=a?"/articles/".concat(t,"/comments/").concat(a):"/articles/".concat(t),e.next=3,O.a.patch("".concat(k).concat(r),{inc_votes:n});case 3:return c=e.sent,o=c.data,e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)}));return function(t,a,n){return e.apply(this,arguments)}}(),V=(a(72),function(e){return e.trim().split(" ").map(function(e){return e.replace(e[0],e[0].toUpperCase())}).join(" ")}),F=function(e){var t=RegExp("[!.?]+ ","g");for(e=e[0].toUpperCase()+e.slice(1);null!==t.exec(e);)e=e.slice(0,t.lastIndex)+e[t.lastIndex].toUpperCase()+e.slice(t.lastIndex+1);return e},R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,articles:[],page:1,isLastPage:!1,sort_by:"created_at",asc_order:!1,err:""},a.fetchArticles=function(){var e=a.props.topic,t=a.state,n=t.page,r=t.sort_by,c=t.asc_order;A(e,n,r,c).then(function(e){a.setState({articles:e})}).catch(function(e){a.setState({err:e})}),A(e,n+1,r,c).then(function(e){e.length?a.setState({isLastPage:!1,loading:!1}):a.setState({isLastPage:!0,loading:!1})}).catch(function(e){return a.setState({isLastPage:!0,loading:!1})})},a.handleClick=function(e){Object(p.c)("/articles/".concat(e))},a.updatePageNumber=function(e){a.setState(function(t){return{page:t.page+e}})},a.resetPageNumber=function(){a.setState({page:1})},a.handleSortChange=function(e){var t=e.target.value;a.setState({sort_by:t})},a.handleOrderChange=function(e){var t=e.target.value;a.setState({asc_order:t})},a.handleNewArticle=function(){var e=a.props.topic,t=e?"/new_article/".concat(e.charAt(0).toUpperCase()+e.slice(1)):"/new_article/";Object(p.c)(t)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.topic,n=t.loggedIn,c=this.state,o=c.err,s=c.articles,i=c.loading,l=c.page,u=c.isLastPage,m=c.sort_by,p=c.asc_order,h=a?"".concat(a.charAt(0).toUpperCase()+a.slice(1)," Articles"):"Articles";return o?r.a.createElement(b,{err:o}):i?r.a.createElement("p",{className:"loading"},"is loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{heading:h,loggedIn:n,handleNewArticle:this.handleNewArticle,display:!0}),r.a.createElement("main",{className:"articlesMain"},r.a.createElement("div",{className:"subNavTop"},r.a.createElement("label",null,"Sort By:"),r.a.createElement("select",{value:m,onChange:this.handleSortChange},r.a.createElement("option",{key:"created_at",value:"created_at"},"Date Created"),r.a.createElement("option",{key:"comment_count",value:"comment_count"},"Comments"),r.a.createElement("option",{key:"votes",value:"votes"},"Votes")),r.a.createElement("label",null,"Order:"),r.a.createElement("select",{value:p,onChange:this.handleOrderChange},r.a.createElement("option",{key:"desc",value:"false"},"Descending"),r.a.createElement("option",{key:"asc",value:"true"},"Ascending")),n&&r.a.createElement("button",{className:"newArticleButton",onClick:function(){return e.handleNewArticle()}},"Post Article")),s.map(function(t){return r.a.createElement("div",{className:"card articleCard",key:t.article_id},r.a.createElement("div",{className:"articleImg"},"IMAGE HERE"),r.a.createElement("div",{className:"articleBox"},r.a.createElement("div",{className:"articleInfo1"},r.a.createElement("div",{className:"box1"},r.a.createElement("p",{className:"topic"},t.topic.toUpperCase()),r.a.createElement("p",{className:"date"},new Date(new Date(t.created_at).toJSON()).toUTCString().slice(5,16)),r.a.createElement("p",{className:"author"},"by ",t.author)),r.a.createElement("div",{className:"box2"},r.a.createElement("p",{className:"comments"},"Comments: ",t.comment_count),r.a.createElement("p",{className:"votes"},"Votes: ",t.votes))),r.a.createElement("div",{className:"articleInfo2"},r.a.createElement("h3",null,V(t.title)),r.a.createElement("button",{onClick:function(){return e.handleClick(t.article_id)}},"Read Article"))))}),r.a.createElement("div",{className:"subNavBottom"},r.a.createElement("button",{onClick:function(){return e.updatePageNumber(-1)},disabled:1===l},"<"),r.a.createElement("p",null,"Page: ",l),r.a.createElement("button",{onClick:function(){return e.updatePageNumber(1)},disabled:u},">"))))}},{key:"componentDidMount",value:function(){this.fetchArticles()}},{key:"componentDidUpdate",value:function(e,t){var a=e.topic!==this.props.topic,n=t.page!==this.state.page,r=t.sort_by!==this.state.sort_by,c=t.asc_order!==this.state.asc_order;(a||r)&&this.resetPageNumber(),(c||r||n||a&&1===this.state.page)&&this.fetchArticles()}}]),t}(n.Component),J=(a(74),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,topics:[],err:""},a.fetchTopics=function(){j().then(function(e){return a.setState({topics:e,loading:!1})}).catch(function(e){a.setState({err:e})})},a.handleClick=function(e){Object(p.c)("/topics/".concat(e,"/articles"))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.topics,n=t.loading,c=t.err;return c?r.a.createElement(b,{err:c}):n?r.a.createElement("p",{className:"loading"},"is loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{heading:"Topics",display:!0}),r.a.createElement("main",{className:"topicMain"},a.map(function(t){return r.a.createElement("div",{className:"card topicCard",key:t.slug,onClick:function(){return e.handleClick(t.slug)}},r.a.createElement("h3",null,t.slug.toUpperCase()),r.a.createElement("h4",null,"IMAGE HERE"),r.a.createElement("h2",null,t.description.toUpperCase()))})))}},{key:"componentDidMount",value:function(){this.fetchTopics()}}]),t}(n.Component)),H=(a(76),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,users:[],err:""},a.fetchUsers=function(){x().then(function(e){return a.setState({users:e,loading:!1})}).catch(function(e){a.setState({err:e})})},a.handleClick=function(e){Object(p.c)("/user/".concat(e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.err,n=t.users,c=t.loading;return a?r.a.createElement(b,{err:a}):c?r.a.createElement("p",{className:"loading"},"is loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{heading:"Users",display:!0}),r.a.createElement("main",{className:"usersMain"},n.map(function(t){return r.a.createElement("div",{className:"card userCard",key:t.username,onClick:function(){return e.handleClick(t.username)}},r.a.createElement("div",{className:"userImg"},r.a.createElement("img",{src:t.avatar_url,alt:"".concat(t.username,"'s avatar")})),r.a.createElement("div",null,r.a.createElement("h3",null,t.username),r.a.createElement("p",null,"Name: ",t.name)))})))}},{key:"componentDidMount",value:function(){this.fetchUsers()}}]),t}(n.Component)),q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={voteChange:0},a.updateVote=function(e){var t=a.props,n=t.article_id,r=t.comment_id;M(n,r,e),a.setState(function(t){return{voteChange:t.voteChange+e}})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.voteChange,a=this.props.votes;return r.a.createElement("section",{className:"voting"},r.a.createElement("h4",null,"Votes: ",a+t),r.a.createElement("button",{onClick:function(){return e.updateVote(1)},disabled:t>0},"Vote Up"),r.a.createElement("button",{onClick:function(){return e.updateVote(-1)},disabled:t<0},"Vote Down"))}}]),t}(n.Component),G=function(e){var t=e.article_id,a=e.comments,n=e.deleteComment,c=e.username;return r.a.createElement(r.a.Fragment,null,a.map(function(e){return r.a.createElement("div",{className:"comment",key:e.comment_id},r.a.createElement("div",{className:"authorImg"},"author img"),r.a.createElement("h4",null,e.author),r.a.createElement("p",null,new Date(new Date(e.created_at).toJSON()).toUTCString().slice(5,16)),r.a.createElement("p",null,e.body),r.a.createElement("div",{className:"votingBox"},r.a.createElement(q,{votes:e.votes,article_id:t,comment_id:e.comment_id}),e.author===c&&r.a.createElement("button",{className:"deleteButton",onClick:function(){return n(e.comment_id)}},"Delete Comment")))}))},Y=(a(78),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={articlesLoading:!0,commentsLoading:!0,article:{},comments:[],commentCount:0,page:1,isLastPage:!1,newComment:"",err:""},a.fetchArticleById=function(){var e=a.props.article_id;_(e).then(function(e){a.setState({article:e,commentCount:parseInt(e.comment_count),articlesLoading:!1})}).catch(function(e){a.setState({err:e})})},a.fetchCommentsByArticleId=function(){var e=a.props.article_id,t=a.state.page;I(e,t).then(function(e){a.setState({comments:e,commentsLoading:!1})}).catch(function(e){return a.setState({comments:[]})}),I(e,t+1).then(function(e){e.length?a.setState({isLastPage:!1,commentsLoading:!1}):a.setState({isLastPage:!0,commentsLoading:!1})}).catch(function(e){return a.setState({isLastPage:!0,commentsLoading:!1})})},a.updatePageNumber=function(e){a.setState(function(t){return{page:t.page+e}})},a.resetPageNumber=function(){a.setState({page:1})},a.handleChange=function(e){var t=e.target,n=t.id,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.article_id,r=t.user.username,c=a.state.newComment;P(n,r,c).then(function(e){a.setState(function(t){var a=t.comments,n=t.commentCount;return{comments:a.concat(e),commentCount:n+1,newComment:""}})}).catch(function(e){a.setState({err:e})})},a.deleteComment=function(e){var t=a.props.article_id;U(t,e).then(function(){a.setState(function(e){return{commentCount:e.commentCount-1}})}).catch(function(e){a.setState({err:e})})},a.deleteArticle=function(e){B(e).then(function(){Object(p.c)("/articles")}).catch(function(e){a.setState({err:e})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.loggedIn,n=t.user.username,c=this.state,o=c.err,s=c.article,i=c.articlesLoading,l=c.comments,u=c.commentCount,m=c.commentsLoading,p=c.page,h=c.isLastPage,g=c.newComment;return o?r.a.createElement(b,{err:o}):i||m?r.a.createElement("p",{className:"loading"},"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{heading:s.title,display:!1}),r.a.createElement("main",{className:"fullArticleMain"},r.a.createElement("div",{className:"card fullArticleCard"},r.a.createElement("div",{className:"fullArticleImg"},r.a.createElement("h1",null,s.title.toUpperCase()),"IMAGE HERE!"),r.a.createElement("div",{className:"articleInfo1"},r.a.createElement("div",{className:"box1"},r.a.createElement("p",{className:"topic"},s.topic.toUpperCase()),r.a.createElement("p",{className:"date"},new Date(new Date(s.created_at).toJSON()).toUTCString().slice(5,16)),r.a.createElement("p",{className:"author"},"by ",s.author)),r.a.createElement("div",{className:"box2"},r.a.createElement("p",{className:"comments"},"Comments: ",u),r.a.createElement("p",{className:"votes"},"Votes: ",s.votes))),r.a.createElement("div",{className:"articleBody"},r.a.createElement("p",null,F(s.body))),r.a.createElement("div",{className:"votingBox"},r.a.createElement(q,{votes:s.votes,article_id:s.article_id}),s.author===n&&r.a.createElement("button",{className:"deleteButton",onClick:function(){return e.deleteArticle(s.article_id)}},"Delete Article")),r.a.createElement("div",{className:"commentsBox"},r.a.createElement("h3",null,u," Comments"),a&&r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h4",null,"Say Something:"),r.a.createElement("textarea",{required:!0,id:"newComment",value:g,onChange:this.handleChange,placeholder:"Enter a new comment..."}),r.a.createElement("button",{type:"submit"},"Post Comment")),r.a.createElement(G,{article_id:s.article_id,comments:l,username:n,deleteComment:this.deleteComment,updateCommentVotes:this.updateCommentVotes}),r.a.createElement("div",{className:"subNavBottom"},r.a.createElement("button",{onClick:function(){return e.updatePageNumber(-1)},disabled:1===p},"<"),r.a.createElement("p",null,"Page: ",p),r.a.createElement("button",{onClick:function(){return e.updatePageNumber(1)},disabled:h},">"))))))}},{key:"componentDidMount",value:function(){this.fetchArticleById(),this.fetchCommentsByArticleId()}},{key:"componentDidUpdate",value:function(e,t){var a=e.article_id!==this.props.article_id,n=t.page!==this.state.page,r=t.commentCount!==this.state.commentCount;(r||a)&&this.resetPageNumber(),(r||n||a&&1===this.state.page)&&this.fetchCommentsByArticleId()}}]),t}(n.Component)),W=(a(80),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,slugs:[],selectedTopic:"New",newTopicName:"",newTopicDesc:"",newArticleName:"",newArticleBody:"",newTopic:"",newArticleID:0,err:""},a.fetchTopics=function(){j().then(function(e){var t=e.map(function(e){return e.slug.charAt(0).toUpperCase()+e.slug.slice(1)}).sort();a.setState({slugs:t,loading:!1})}).catch(function(e){a.setState({err:e})})},a.handleTopicSelect=function(e){var t=e.target.value;a.setState({selectedTopic:t})},a.handleChange=function(e){var t=e.target,n=t.id,r=t.value;a.setState(Object(v.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.newTopicDesc,r=t.newTopicName;"New"===t.selectedTopic?L(V(r),F(n)).then(function(e){var t=e.slug;a.setState({newTopic:t})}).then(function(){return a.submitNewArticle()}).catch(function(e){a.setState({err:e})}):a.submitNewArticle()},a.submitNewArticle=function(){var e=a.state,t=e.newArticleBody,n=e.newArticleName,r=e.newTopicName,c=e.selectedTopic,o=a.props.user.username,s=V("New"===c?r:c);D(s,V(n),F(t),o).then(function(e){a.setState({newArticleID:e[0].article_id}),Object(p.c)("/articles/".concat(e[0].article_id))}).catch(function(e){a.setState({err:e})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.err,a=e.slugs,n=e.loading,c=e.selectedTopic,o=this.props,s=o.topic,i=o.loggedIn,l=s?"Create a New ".concat(s," Article"):"Create a New Article";return t?r.a.createElement(b,{err:t}):n?r.a.createElement("p",{className:"loading"},"is loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{heading:l,loggedIn:i,display:!0}),r.a.createElement("main",{className:"newArticleMain"},r.a.createElement("div",{className:"newArticleTopic"},r.a.createElement("h3",null,"Select a Topic for your Article:"),r.a.createElement("div",{className:"styled-topicSelect"},r.a.createElement("select",{className:"topicSelect",autoFocus:!0,required:!0,defaultValue:s,onChange:this.handleTopicSelect},r.a.createElement("option",{value:"New"},"New Topic"),a.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("form",{onSubmit:this.handleSubmit,className:"newArticleForm"},"New"===c&&r.a.createElement("section",{className:"newTopicSection"},r.a.createElement("h3",null,"New Topic Details:"),r.a.createElement("input",{type:"text",required:!0,id:"newTopicName",value:this.state.value,onChange:this.handleChange,placeholder:"Enter a New Topic Title"}),r.a.createElement("textarea",{required:!0,id:"newTopicDesc",value:this.state.value,onChange:this.handleChange,placeholder:"Enter a description for your new topic..."})),r.a.createElement("section",{className:"newArticleSection"},r.a.createElement("h3",null,"New Article Details:"),r.a.createElement("input",{type:"text",required:!0,id:"newArticleName",value:this.state.value,onChange:this.handleChange,placeholder:"Enter a New Article Title"}),r.a.createElement("textarea",{required:!0,id:"newArticleBody",value:this.state.value,onChange:this.handleChange,placeholder:"Enter your new article..."})),r.a.createElement("button",{className:"publishButton",type:"submit"},"Publish Your Article"))))}},{key:"componentDidMount",value:function(){this.fetchTopics();var e=this.props.topic;e&&this.setState({selectedTopic:e})}}]),t}(n.Component)),z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={sidebarClassName:"sidebar",buttonClass:"menu-button",user:{},loggedIn:!1,err:!1},a.toggleSidebar=function(){var e=a.state,t=e.sidebarClassName,n=e.buttonClass;n="menu-button"===n?"menu-button active":"menu-button",t="sidebar"===t?"sidebar active":"sidebar",a.setState({sidebarClassName:t,buttonClass:n})},a.login=function(e){T(e).then(function(e){a.setState({user:e,loggedIn:!0}),sessionStorage.setItem("state",JSON.stringify(a.state))}).catch(function(e){a.setState({err:e})})},a.logout=function(){sessionStorage.removeItem("state"),a.setState({user:{},loggedIn:!1})},a.checkLoggedInStorage=function(){var e=sessionStorage.getItem("state");e&&a.setState(JSON.parse(e))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.buttonClass,a=e.sidebarClassName,n=e.user,c=e.loggedIn;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:a},r.a.createElement(N,{user:n,login:this.login,logout:this.logout,loggedIn:c,toggleSidebar:this.toggleSidebar})),r.a.createElement("button",{className:t,onClick:this.toggleSidebar},r.a.createElement("span",{className:"bar"})),r.a.createElement(p.b,{className:"mainDisplay"},r.a.createElement(f,{path:"/",toggleSidebar:this.toggleSidebar}),r.a.createElement(J,{path:"/topics",toggleSidebar:this.toggleSidebar,loggedIn:c}),r.a.createElement(R,{path:"/topics/:topic/articles",toggleSidebar:this.toggleSidebar,loggedIn:c}),r.a.createElement(R,{path:"/articles",toggleSidebar:this.toggleSidebar,loggedIn:c}),r.a.createElement(W,{path:"/new_article/",toggleSidebar:this.toggleSidebar,loggedIn:c,user:n}),r.a.createElement(W,{path:"/new_article/:topic",toggleSidebar:this.toggleSidebar,loggedIn:c,user:n}),r.a.createElement(Y,{path:"articles/:article_id",toggleSidebar:this.toggleSidebar,loggedIn:c,user:n}),r.a.createElement(H,{path:"/users",toggleSidebar:this.toggleSidebar,loggedIn:c})))}},{key:"componentDidMount",value:function(){this.checkLoggedInStorage()}}]),t}(n.Component);o.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.3a975084.chunk.js.map