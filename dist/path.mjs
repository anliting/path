/*© An-Li Ting (anliting.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/var path = {
    normalize(s){
        let res;
        if(s[0]=='/'){
            let a=[];
            for(let t of s.split('/')){
                if(t==''||t=='.')
                    continue
                if(t=='..'){
                    if(a.length)
                        a.pop();
                    continue
                }
                a.push(t);
            }
            res='/'+a.join('/')+(a.length&&s[s.length-1]=='/'?'/':'');
        }else{
            let a=[];
            for(let t of s.split('/')){
                if(t==''||t=='.')
                    continue
                if(t=='..'&&a.length){
                    a.pop();
                    continue
                }
                a.push(t);
            }
            res=(a.length?a.join('/'):'.')+(s[s.length-1]=='/'?'/':'');
        }
        return res
    },
};

export default path;
