import { apiClient } from "./client";

export type CustomerTask = {
  id: string;
  organizationId: string;
  workspaceId: string | null;
  title: string;
  description: string | null;
  category: string;
  status: string;
  priority: string;
  assignedTo: string | null;
  dueAt: string | null;
  createdAt: string;
  completedAt: string | null;
  sourceEventType: string;
  sourceEntityType: string;
  sourceEntityId: string | null;
};

export type CustomerTaskList = {
  organizationId: string;
  workspaceId: string | null;
  totalTasks: number;
  openTasks: number;
  inProgressTasks: number;
  completedTasks: number;
  overdueTasks: number;
  supportsMutations: boolean;
  tasks: CustomerTask[];
};

type CustomerTaskApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;
  title: string;
  description: string | null;
  category: string;
  status: string;
  priority: string;
  assigned_to: string | null;
  due_at: string | null;
  created_at: string;
  completed_at: string | null;
  source_event_type: string;
  source_entity_type: string;
  source_entity_id: string | null;
};

type CustomerTaskListApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  total_tasks: number;
  open_tasks: number;
  in_progress_tasks: number;
  completed_tasks: number;
  overdue_tasks: number;
  supports_mutations: boolean;
  tasks: CustomerTaskApiResponse[];
};

function mapTask(
  task: CustomerTaskApiResponse,
): CustomerTask {
  return {
    id: task.id,
    organizationId: task.organization_id,
    workspaceId: task.workspace_id,
    title: task.title,
    description: task.description,
    category: task.category,
    status: task.status,
    priority: task.priority,
    assignedTo: task.assigned_to,
    dueAt: task.due_at,
    createdAt: task.created_at,
    completedAt: task.completed_at,
    sourceEventType: task.source_event_type,
    sourceEntityType: task.source_entity_type,
    sourceEntityId: task.source_entity_id,
  };
}

export async function listCustomerTasks(): Promise<
  CustomerTaskList
> {
  const response =
    await apiClient.get<CustomerTaskListApiResponse>(
      "/customer/tasks",
    );

  return {
    organizationId: response.data.organization_id,
    workspaceId: response.data.workspace_id,
    totalTasks: response.data.total_tasks,
    openTasks: response.data.open_tasks,
    inProgressTasks: response.data.in_progress_tasks,
    completedTasks: response.data.completed_tasks,
    overdueTasks: response.data.overdue_tasks,
    supportsMutations:
      response.data.supports_mutations,
    tasks: response.data.tasks.map(mapTask),
  };
}
