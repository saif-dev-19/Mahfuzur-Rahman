const codeRows = [
  ["const portfolio = build()", "React.memo()", "async deploy()", "return <Experience />", "ship.cleanUI()"],
  ["Python", "Django REST", "PostgreSQL", "Docker", "Redis", "Celery"],
  ["git push origin main", "useEffect()", "tailwind.config.js", "npm run build", "vite.ready()"],
  ["API.connected", "WebSocket.open()", "JWT.verify()", "cache.set()", "query.optimize()"],
  ["while(alive) create()", "debug()", "refactor()", "commit()", "deploy()"],
  ["#include <iostream>", "int main()", "std::cout", "return 0;", "vector<int> nums"],
  ["class Solution", "public:", "private:", "new Node()", "delete ptr", "nullptr"],
  ["for(int i=0; i<n; i++)", "while(low <= high)", "if(flag)", "else", "switch(choice)"],
];

const codeColumns = [
  ["01", "fn", "{}", "=>", "db", "api", "jsx", "css", "int", "char"],
  ["git", "dev", "run", "200", "jwt", "sql", "ui", "ux"],
  ["py", "dj", "rq", "ws", "ci", "cd", "log", "ok", "cpp", "gcc"],
  ["if", "map", "use", "set", "try", "new", "app", "web", "for", "do"],
  ["npm", "tsx", "dom", "srv", "env", "key", "res", "req", "ptr", "ref"],
  ["C", "C++", "printf", "scanf", "malloc", "free", "struct", "enum"],
  ["cout", "cin", "endl", "auto", "const", "void", "bool", "long"],
];

export default function CodeFlowBackground() {
  return (
    <div className="code-flow" aria-hidden="true">
      <div className="code-rain">
        {codeColumns.map((column, columnIndex) => (
          <div
            key={`${column.join("-")}-${columnIndex}`}
            className="code-rain__column"
            style={{
              "--rain-index": columnIndex,
              "--rain-duration": `${15 + columnIndex * 2}s`,
            }}
          >
            {[...column, ...column, ...column].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>

      {codeRows.map((row, rowIndex) => (
        <div
          key={row.join("-")}
          className="code-flow__row"
          style={{
            "--flow-index": rowIndex,
            "--flow-duration": `${34 + rowIndex * 5}s`,
          }}
        >
          {[...row, ...row, ...row].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
