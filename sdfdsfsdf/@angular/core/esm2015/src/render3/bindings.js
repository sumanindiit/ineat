/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { devModeEqual } from '../change_detection/change_detection_util';
import { assertIndexInRange, assertLessThan, assertNotSame } from '../util/assert';
import { getExpressionChangedErrorDetails, throwErrorIfNoChangesMode } from './errors';
import { isInCheckNoChangesMode } from './state';
import { NO_CHANGE } from './tokens';
// TODO(misko): consider inlining
/** Updates binding and returns the value. */
export function updateBinding(lView, bindingIndex, value) {
    return lView[bindingIndex] = value;
}
/** Gets the current binding value. */
export function getBinding(lView, bindingIndex) {
    ngDevMode && assertIndexInRange(lView, bindingIndex);
    ngDevMode &&
        assertNotSame(lView[bindingIndex], NO_CHANGE, 'Stored value should never be NO_CHANGE.');
    return lView[bindingIndex];
}
/**
 * Updates binding if changed, then returns whether it was updated.
 *
 * This function also checks the `CheckNoChangesMode` and throws if changes are made.
 * Some changes (Objects/iterables) during `CheckNoChangesMode` are exempt to comply with VE
 * behavior.
 *
 * @param lView current `LView`
 * @param bindingIndex The binding in the `LView` to check
 * @param value New value to check against `lView[bindingIndex]`
 * @returns `true` if the bindings has changed. (Throws if binding has changed during
 *          `CheckNoChangesMode`)
 */
export function bindingUpdated(lView, bindingIndex, value) {
    ngDevMode && assertNotSame(value, NO_CHANGE, 'Incoming value should never be NO_CHANGE.');
    ngDevMode &&
        assertLessThan(bindingIndex, lView.length, `Slot should have been initialized to NO_CHANGE`);
    const oldValue = lView[bindingIndex];
    if (Object.is(oldValue, value)) {
        return false;
    }
    else {
        if (ngDevMode && isInCheckNoChangesMode()) {
            // View engine didn't report undefined values as changed on the first checkNoChanges pass
            // (before the change detection was run).
            const oldValueToCompare = oldValue !== NO_CHANGE ? oldValue : undefined;
            if (!devModeEqual(oldValueToCompare, value)) {
                const details = getExpressionChangedErrorDetails(lView, bindingIndex, oldValueToCompare, value);
                throwErrorIfNoChangesMode(oldValue === NO_CHANGE, details.oldValue, details.newValue, details.propName);
            }
            // There was a change, but the `devModeEqual` decided that the change is exempt from an error.
            // For this reason we exit as if no change. The early exit is needed to prevent the changed
            // value to be written into `LView` (If we would write the new value that we would not see it
            // as change on next CD.)
            return false;
        }
        lView[bindingIndex] = value;
        return true;
    }
}
/** Updates 2 bindings if changed, then returns whether either was updated. */
export function bindingUpdated2(lView, bindingIndex, exp1, exp2) {
    const different = bindingUpdated(lView, bindingIndex, exp1);
    return bindingUpdated(lView, bindingIndex + 1, exp2) || different;
}
/** Updates 3 bindings if changed, then returns whether any was updated. */
export function bindingUpdated3(lView, bindingIndex, exp1, exp2, exp3) {
    const different = bindingUpdated2(lView, bindingIndex, exp1, exp2);
    return bindingUpdated(lView, bindingIndex + 2, exp3) || different;
}
/** Updates 4 bindings if changed, then returns whether any was updated. */
export function bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4) {
    const different = bindingUpdated2(lView, bindingIndex, exp1, exp2);
    return bindingUpdated2(lView, bindingIndex + 2, exp3, exp4) || different;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmluZGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2JpbmRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRWpGLE9BQU8sRUFBQyxnQ0FBZ0MsRUFBRSx5QkFBeUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUVyRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDL0MsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUduQyxpQ0FBaUM7QUFDakMsNkNBQTZDO0FBQzdDLE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBWSxFQUFFLFlBQW9CLEVBQUUsS0FBVTtJQUMxRSxPQUFPLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDckMsQ0FBQztBQUdELHNDQUFzQztBQUN0QyxNQUFNLFVBQVUsVUFBVSxDQUFDLEtBQVksRUFBRSxZQUFvQjtJQUMzRCxTQUFTLElBQUksa0JBQWtCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3JELFNBQVM7UUFDTCxhQUFhLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLFNBQVMsRUFBRSx5Q0FBeUMsQ0FBQyxDQUFDO0lBQzdGLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdCLENBQUM7QUFFRDs7Ozs7Ozs7Ozs7O0dBWUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLEtBQVksRUFBRSxZQUFvQixFQUFFLEtBQVU7SUFDM0UsU0FBUyxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLDJDQUEyQyxDQUFDLENBQUM7SUFDMUYsU0FBUztRQUNMLGNBQWMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxnREFBZ0QsQ0FBQyxDQUFDO0lBQ2pHLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUVyQyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTTtRQUNMLElBQUksU0FBUyxJQUFJLHNCQUFzQixFQUFFLEVBQUU7WUFDekMseUZBQXlGO1lBQ3pGLHlDQUF5QztZQUN6QyxNQUFNLGlCQUFpQixHQUFHLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLE1BQU0sT0FBTyxHQUNULGdDQUFnQyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3BGLHlCQUF5QixDQUNyQixRQUFRLEtBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkY7WUFDRCw4RkFBOEY7WUFDOUYsMkZBQTJGO1lBQzNGLDZGQUE2RjtZQUM3Rix5QkFBeUI7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDNUIsT0FBTyxJQUFJLENBQUM7S0FDYjtBQUNILENBQUM7QUFFRCw4RUFBOEU7QUFDOUUsTUFBTSxVQUFVLGVBQWUsQ0FBQyxLQUFZLEVBQUUsWUFBb0IsRUFBRSxJQUFTLEVBQUUsSUFBUztJQUN0RixNQUFNLFNBQVMsR0FBRyxjQUFjLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxPQUFPLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7QUFDcEUsQ0FBQztBQUVELDJFQUEyRTtBQUMzRSxNQUFNLFVBQVUsZUFBZSxDQUMzQixLQUFZLEVBQUUsWUFBb0IsRUFBRSxJQUFTLEVBQUUsSUFBUyxFQUFFLElBQVM7SUFDckUsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLE9BQU8sY0FBYyxDQUFDLEtBQUssRUFBRSxZQUFZLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQztBQUNwRSxDQUFDO0FBRUQsMkVBQTJFO0FBQzNFLE1BQU0sVUFBVSxlQUFlLENBQzNCLEtBQVksRUFBRSxZQUFvQixFQUFFLElBQVMsRUFBRSxJQUFTLEVBQUUsSUFBUyxFQUFFLElBQVM7SUFDaEYsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLE9BQU8sZUFBZSxDQUFDLEtBQUssRUFBRSxZQUFZLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUM7QUFDM0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Rldk1vZGVFcXVhbH0gZnJvbSAnLi4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uX3V0aWwnO1xuaW1wb3J0IHthc3NlcnRJbmRleEluUmFuZ2UsIGFzc2VydExlc3NUaGFuLCBhc3NlcnROb3RTYW1lfSBmcm9tICcuLi91dGlsL2Fzc2VydCc7XG5cbmltcG9ydCB7Z2V0RXhwcmVzc2lvbkNoYW5nZWRFcnJvckRldGFpbHMsIHRocm93RXJyb3JJZk5vQ2hhbmdlc01vZGV9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7TFZpZXd9IGZyb20gJy4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7aXNJbkNoZWNrTm9DaGFuZ2VzTW9kZX0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQge05PX0NIQU5HRX0gZnJvbSAnLi90b2tlbnMnO1xuXG5cbi8vIFRPRE8obWlza28pOiBjb25zaWRlciBpbmxpbmluZ1xuLyoqIFVwZGF0ZXMgYmluZGluZyBhbmQgcmV0dXJucyB0aGUgdmFsdWUuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQmluZGluZyhsVmlldzogTFZpZXcsIGJpbmRpbmdJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogYW55IHtcbiAgcmV0dXJuIGxWaWV3W2JpbmRpbmdJbmRleF0gPSB2YWx1ZTtcbn1cblxuXG4vKiogR2V0cyB0aGUgY3VycmVudCBiaW5kaW5nIHZhbHVlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJpbmRpbmcobFZpZXc6IExWaWV3LCBiaW5kaW5nSW5kZXg6IG51bWJlcik6IGFueSB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRJbmRleEluUmFuZ2UobFZpZXcsIGJpbmRpbmdJbmRleCk7XG4gIG5nRGV2TW9kZSAmJlxuICAgICAgYXNzZXJ0Tm90U2FtZShsVmlld1tiaW5kaW5nSW5kZXhdLCBOT19DSEFOR0UsICdTdG9yZWQgdmFsdWUgc2hvdWxkIG5ldmVyIGJlIE5PX0NIQU5HRS4nKTtcbiAgcmV0dXJuIGxWaWV3W2JpbmRpbmdJbmRleF07XG59XG5cbi8qKlxuICogVXBkYXRlcyBiaW5kaW5nIGlmIGNoYW5nZWQsIHRoZW4gcmV0dXJucyB3aGV0aGVyIGl0IHdhcyB1cGRhdGVkLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWxzbyBjaGVja3MgdGhlIGBDaGVja05vQ2hhbmdlc01vZGVgIGFuZCB0aHJvd3MgaWYgY2hhbmdlcyBhcmUgbWFkZS5cbiAqIFNvbWUgY2hhbmdlcyAoT2JqZWN0cy9pdGVyYWJsZXMpIGR1cmluZyBgQ2hlY2tOb0NoYW5nZXNNb2RlYCBhcmUgZXhlbXB0IHRvIGNvbXBseSB3aXRoIFZFXG4gKiBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0gbFZpZXcgY3VycmVudCBgTFZpZXdgXG4gKiBAcGFyYW0gYmluZGluZ0luZGV4IFRoZSBiaW5kaW5nIGluIHRoZSBgTFZpZXdgIHRvIGNoZWNrXG4gKiBAcGFyYW0gdmFsdWUgTmV3IHZhbHVlIHRvIGNoZWNrIGFnYWluc3QgYGxWaWV3W2JpbmRpbmdJbmRleF1gXG4gKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGJpbmRpbmdzIGhhcyBjaGFuZ2VkLiAoVGhyb3dzIGlmIGJpbmRpbmcgaGFzIGNoYW5nZWQgZHVyaW5nXG4gKiAgICAgICAgICBgQ2hlY2tOb0NoYW5nZXNNb2RlYClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJpbmRpbmdVcGRhdGVkKGxWaWV3OiBMVmlldywgYmluZGluZ0luZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgbmdEZXZNb2RlICYmIGFzc2VydE5vdFNhbWUodmFsdWUsIE5PX0NIQU5HRSwgJ0luY29taW5nIHZhbHVlIHNob3VsZCBuZXZlciBiZSBOT19DSEFOR0UuJyk7XG4gIG5nRGV2TW9kZSAmJlxuICAgICAgYXNzZXJ0TGVzc1RoYW4oYmluZGluZ0luZGV4LCBsVmlldy5sZW5ndGgsIGBTbG90IHNob3VsZCBoYXZlIGJlZW4gaW5pdGlhbGl6ZWQgdG8gTk9fQ0hBTkdFYCk7XG4gIGNvbnN0IG9sZFZhbHVlID0gbFZpZXdbYmluZGluZ0luZGV4XTtcblxuICBpZiAoT2JqZWN0LmlzKG9sZFZhbHVlLCB2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG5nRGV2TW9kZSAmJiBpc0luQ2hlY2tOb0NoYW5nZXNNb2RlKCkpIHtcbiAgICAgIC8vIFZpZXcgZW5naW5lIGRpZG4ndCByZXBvcnQgdW5kZWZpbmVkIHZhbHVlcyBhcyBjaGFuZ2VkIG9uIHRoZSBmaXJzdCBjaGVja05vQ2hhbmdlcyBwYXNzXG4gICAgICAvLyAoYmVmb3JlIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHdhcyBydW4pLlxuICAgICAgY29uc3Qgb2xkVmFsdWVUb0NvbXBhcmUgPSBvbGRWYWx1ZSAhPT0gTk9fQ0hBTkdFID8gb2xkVmFsdWUgOiB1bmRlZmluZWQ7XG4gICAgICBpZiAoIWRldk1vZGVFcXVhbChvbGRWYWx1ZVRvQ29tcGFyZSwgdmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGRldGFpbHMgPVxuICAgICAgICAgICAgZ2V0RXhwcmVzc2lvbkNoYW5nZWRFcnJvckRldGFpbHMobFZpZXcsIGJpbmRpbmdJbmRleCwgb2xkVmFsdWVUb0NvbXBhcmUsIHZhbHVlKTtcbiAgICAgICAgdGhyb3dFcnJvcklmTm9DaGFuZ2VzTW9kZShcbiAgICAgICAgICAgIG9sZFZhbHVlID09PSBOT19DSEFOR0UsIGRldGFpbHMub2xkVmFsdWUsIGRldGFpbHMubmV3VmFsdWUsIGRldGFpbHMucHJvcE5hbWUpO1xuICAgICAgfVxuICAgICAgLy8gVGhlcmUgd2FzIGEgY2hhbmdlLCBidXQgdGhlIGBkZXZNb2RlRXF1YWxgIGRlY2lkZWQgdGhhdCB0aGUgY2hhbmdlIGlzIGV4ZW1wdCBmcm9tIGFuIGVycm9yLlxuICAgICAgLy8gRm9yIHRoaXMgcmVhc29uIHdlIGV4aXQgYXMgaWYgbm8gY2hhbmdlLiBUaGUgZWFybHkgZXhpdCBpcyBuZWVkZWQgdG8gcHJldmVudCB0aGUgY2hhbmdlZFxuICAgICAgLy8gdmFsdWUgdG8gYmUgd3JpdHRlbiBpbnRvIGBMVmlld2AgKElmIHdlIHdvdWxkIHdyaXRlIHRoZSBuZXcgdmFsdWUgdGhhdCB3ZSB3b3VsZCBub3Qgc2VlIGl0XG4gICAgICAvLyBhcyBjaGFuZ2Ugb24gbmV4dCBDRC4pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxWaWV3W2JpbmRpbmdJbmRleF0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG4vKiogVXBkYXRlcyAyIGJpbmRpbmdzIGlmIGNoYW5nZWQsIHRoZW4gcmV0dXJucyB3aGV0aGVyIGVpdGhlciB3YXMgdXBkYXRlZC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nVXBkYXRlZDIobFZpZXc6IExWaWV3LCBiaW5kaW5nSW5kZXg6IG51bWJlciwgZXhwMTogYW55LCBleHAyOiBhbnkpOiBib29sZWFuIHtcbiAgY29uc3QgZGlmZmVyZW50ID0gYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCwgZXhwMSk7XG4gIHJldHVybiBiaW5kaW5nVXBkYXRlZChsVmlldywgYmluZGluZ0luZGV4ICsgMSwgZXhwMikgfHwgZGlmZmVyZW50O1xufVxuXG4vKiogVXBkYXRlcyAzIGJpbmRpbmdzIGlmIGNoYW5nZWQsIHRoZW4gcmV0dXJucyB3aGV0aGVyIGFueSB3YXMgdXBkYXRlZC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nVXBkYXRlZDMoXG4gICAgbFZpZXc6IExWaWV3LCBiaW5kaW5nSW5kZXg6IG51bWJlciwgZXhwMTogYW55LCBleHAyOiBhbnksIGV4cDM6IGFueSk6IGJvb2xlYW4ge1xuICBjb25zdCBkaWZmZXJlbnQgPSBiaW5kaW5nVXBkYXRlZDIobFZpZXcsIGJpbmRpbmdJbmRleCwgZXhwMSwgZXhwMik7XG4gIHJldHVybiBiaW5kaW5nVXBkYXRlZChsVmlldywgYmluZGluZ0luZGV4ICsgMiwgZXhwMykgfHwgZGlmZmVyZW50O1xufVxuXG4vKiogVXBkYXRlcyA0IGJpbmRpbmdzIGlmIGNoYW5nZWQsIHRoZW4gcmV0dXJucyB3aGV0aGVyIGFueSB3YXMgdXBkYXRlZC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiaW5kaW5nVXBkYXRlZDQoXG4gICAgbFZpZXc6IExWaWV3LCBiaW5kaW5nSW5kZXg6IG51bWJlciwgZXhwMTogYW55LCBleHAyOiBhbnksIGV4cDM6IGFueSwgZXhwNDogYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpZmZlcmVudCA9IGJpbmRpbmdVcGRhdGVkMihsVmlldywgYmluZGluZ0luZGV4LCBleHAxLCBleHAyKTtcbiAgcmV0dXJuIGJpbmRpbmdVcGRhdGVkMihsVmlldywgYmluZGluZ0luZGV4ICsgMiwgZXhwMywgZXhwNCkgfHwgZGlmZmVyZW50O1xufVxuIl19