<!DOCTYPE html>
<html>
<head>
    <script src="./build/react.js"></script>
    <script src="./build/JSXTransformer.js"></script>
</head>
<body>
<div id="container"></div>
<script type="text/jsx">
    var TestClickComponent = React.createClass({
        handleClick:function(event){
            var tipE = React.findDOMNode(this.refs.tip);
            if(tipE.style.display === "none"){
                tipE.style.display = 'inline';
            }else{
                tipE.style.display = 'none';
            }
            event.preventDefault();
            event.stopPropagation();
        },
        render: function(){
            return (
                    <div>
                        <button onClick={this.handleClick}>显示|隐藏</button><span ref="tip">点击测试</span>
                    </div>
            );
        }
    });

    var TestInputComponent = React.createClass({
        getInitialState: function(){
            return {
                inputContent:""
            }
        },
        changHandler:function(event){
            this.setState({
                inputContent:event.target.value
            });
            event.preventDefault();
            event.stopPropagation();
        },
        render: function(){
            return(
                    <div>
                        <input type="text" onChange={this.changHandler}/><span>{this.state.inputContent}</span>
                    </div>
            )
        }
    });

    React.render(
            <div>
                <TestClickComponent/>
                <br/><br/><br/><br/>
                <TestInputComponent/>
            </div>,
            document.getElementById('container')
    )
</script>
</body>
</html>
