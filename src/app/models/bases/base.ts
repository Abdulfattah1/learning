import { Directive, OnDestroy, SimpleChange } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class Base implements OnDestroy {
    destroy$: Subject<boolean> = new Subject();
    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
        this.destroy$.unsubscribe();
    }
}
