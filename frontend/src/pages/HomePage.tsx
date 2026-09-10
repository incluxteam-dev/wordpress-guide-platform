import { useGuideStore } from '../store/guideStore';
import { useGuideData } from '../hooks/useGuideData';

export default function HomePage() {
  const { categories, loading, error } = useGuideData();
  const count = useGuideStore((state) => state.completedTaskIds.length);

  if (loading) return <p>A carregar tarefas...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <section>
      <p>Tarefas concluídas: {count}</p>
      {categories.map((category) => (
        <article key={category.id}>
          <h2>{category.name}</h2>
          {category.description ? <p>{category.description}</p> : null}
          <h3>Tarefas</h3>
          <ul>
            {category.tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
          <h3>Plugins recomendados</h3>
          <ul>
            {category.pluginRecommendations.map((plugin) => (
              <li key={plugin.id}>{plugin.name}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}
